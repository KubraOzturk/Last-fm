import {render,screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "@remix-run/router";
//import { createMemoryHistory } from "history";
// router
import { BrowserRouter, Router } from "react-router-dom";
// react-query
import { QueryClient, QueryClientProvider } from "react-query";
// redux
import { Provider } from "react-redux";
import App from "../App";
import { Details } from "../pages";
import { store } from "../redux";

// routing tests

const queryClient = new QueryClient();
test("home page", () => {
  const history = createMemoryHistory();
  const route = "/";
  history.push(route);
  render(
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );

  expect(history.location.pathname).toBe("/");
});

test("details page", () => {
    const history = createMemoryHistory();
    const route = "/artist/";
    history.push(route);
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router location={history.location} navigator={history}>
            <Details />
          </Router>
        </QueryClientProvider>
      </Provider>
    );
  
    expect(history.location.pathname).toBe("/artist");
  });

//   test("back to home page btn",()=>{
//     render(<Details/>);
//     const backBtn=screen.getByText("Back To Home");
//     userEvent.click(backBtn);
//    const history = createMemoryHistory();
//const route = "/";
//history.push(route);
//     expect(route)
//   })