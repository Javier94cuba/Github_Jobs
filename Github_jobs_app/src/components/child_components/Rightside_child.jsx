import React from "react";
import { Link } from "react-router-dom";

export function Rightside_child({
  url,
  name,
  offer_job,
  contract_of_job,
  city,
  days_of_published,
}) {
  return (
    <>
      <Link to={"/work/"}>
        <div className="rightside_container">
          <img src={url} />
          <div className="information">
            <span className="name_text">
              {name} <br />
            </span>
            <span className="offer_job_text">
              {offer_job} <br />
            </span>
            <span className="contract_of_job">
              {contract_of_job} <br />
            </span>
          </div>
          <div className="right_info">
            <span className="city">{city}</span>
            <span className="days">{days_of_published}</span>
          </div>
        </div>
      </Link>
    </>
  );
}
