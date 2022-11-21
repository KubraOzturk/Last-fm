import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
  Wrap,
  Heading,
  Flex,
  Box,
  Image,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { fetchArtistInfo } from '../api/api.mjs';

const ArtistDetail = ({ name, playCount, image, listeners }) => {
  //const artistImage = image[3]['#text'];

  return (
    <section className="section artist-section">
      <div className="card">
        <h2 className="card_title">{name}</h2>
        <div className="card_image">
          <img src={"https://picsum.photos/200"} alt={name} />
        </div>
        <div className="album-info">
          <p>
            <div className="album-data">playcount</div>
            {playCount}
          </p>
          {listeners ? (
            <p>
              <div className="album-data">listeners</div>
              {listeners}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ArtistDetail;
