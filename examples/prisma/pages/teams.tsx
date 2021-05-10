import type { FC } from "react";
import * as React from "react";
import { Helmet } from "react-helmet-async";

import { useLoader } from "mwap";

import type { TeamPageData } from "../loaders/teams";

const HomePage: FC = () => {
  const { teams } = useLoader<TeamPageData>("teams");

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <h1>Teams</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            {team.city} {team.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
