import { Rightside_child } from "./child_components/Rightside_child";
import kasisto from "../assets/images/kasisto.png";
import Lev from "../assets/images/Lev.png";
import Sesame from "../assets/images/sesame.png";

export function Rightside({ value, search }) {
  return (
    <>
      {search === "" && value === false ? (
        <div className="prueba">
          <Rightside_child
            url={kasisto}
            name="Kasisto"
            offer_job="Front-End Software Engineer"
            contract_of_job="Full time"
            city="New York"
            days_of_published="5 days ago"
          />
          <Rightside_child
            url={Lev}
            name="Lev"
            offer_job="Senior Engineer"
            contract_of_job="Full time"
            city="NY or LA"
            days_of_published="5 days ago"
          />
          <Rightside_child
            url={null}
            name="New York University"
            offer_job="Technology Solutions Developer"
            contract_of_job="Full time"
            city="New York"
            days_of_published="5 days ago"
          />
          <Rightside_child
            url={Sesame}
            name="Sesame"
            offer_job="Software engineer (back end)"
            contract_of_job="Part-Time"
            city="New York Berlin"
            days_of_published="5 days ago"
          />
          <Rightside_child
            url={null}
            name="Paddle"
            offer_job="Senior Python Software Engineer"
            contract_of_job="Part-Time"
            city="New York"
            days_of_published="5 days ago"
          />
        </div>
      ) : (
        ""
      )}
      {search === "kasisto" && value === false ? (
        <div className="prueba">
          <Rightside_child
            url={kasisto}
            name="Kasisto"
            offer_job="Front-End Software Engineer"
            contract_of_job="Full time"
            city="New York"
            days_of_published="5 days ago"
          />
        </div>
      ) : (
        ""
      )}
      {value ? (
        <div className="prueba">
          <Rightside_child
            url={kasisto}
            name="Kasisto"
            offer_job="Front-End Software Engineer"
            contract_of_job="Full time"
            city="New York"
            days_of_published="5 days ago"
          />
          <Rightside_child
            url={Lev}
            name="Lev"
            offer_job="Senior Engineer"
            contract_of_job="Full time"
            city="NY or LA"
            days_of_published="5 days ago"
          />
          <Rightside_child
            url={null}
            name="New York University"
            offer_job="Technology Solutions Developer"
            contract_of_job="Full time"
            city="New York"
            days_of_published="5 days ago"
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
