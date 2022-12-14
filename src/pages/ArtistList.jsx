import React from "react";
import { useInfiniteQuery } from "react-query";
import {
  Heading,
  Container,
  Center,
  List,
  ListItem,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { API_KEY } from "../api/api.mjs";
import SingleArtist from "../components/SingleArtist";

function ArtistList() {
   //FETCH TOP ARTISTS
   async function fetchTopArtists({ pageParam = 1 }) {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json&limit=50&page=` +
        pageParam
    );
    if (!response.ok) {
      throw new Error("Response was not OK");
    }
    const data = await response.json();
    return data;
  }

  // React-query infinite scroll
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery("topArtists", fetchTopArtists, {
    getNextPageParam: (_lastPage, allPages) => [allPages.length + 2],
    // index of first page[0] + 2 = 2 => (second page)
  });

  console.log(data);

  //isLoading
  if (isLoading) {
    return (
      <Center m={3}>
        <Text data-testid="Loading-text">Loading...</Text>
      </Center>
    );
  }

  //isError
  if (isError) {
    return (
      <Center m={3}>
        <Text>{error.message}</Text>
      </Center>
    );
  }

  return (
    <Container bg={`${({ theme }) => theme.bg}`}>
      <Center m={5}>
        <Heading fontSize={"3xl"} fontFamily={"body"} fontWeight={700}>
          TOP ARTISTS
        </Heading>
      </Center>

      <Box>
        <List>
          {data?.pages.map((group, i) => (
            <React.Fragment key={i} bg={`${({ theme }) => theme.bg}`}>
              {group?.artists?.artist.map((item, index) => (
                <ListItem key={index}>
                  <SingleArtist height={"280"} width={"180"} artist={item}  />
                </ListItem>
              ))}
            </React.Fragment>
          ))}
        </List>
      </Box>

      <Center p={5}>
        <Box>
          <Button
            disabled={!hasNextPage || isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
          </Button>
        </Box>
        <Box>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</Box>
      </Center>
    </Container>
  );
}

export default ArtistList;