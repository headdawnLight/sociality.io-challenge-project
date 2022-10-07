import { useState } from "react";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import ForumIcon from "@mui/icons-material/Forum";
import EarbudsIcon from "@mui/icons-material/Earbuds";
import AssessmentIcon from "@mui/icons-material/Assessment";

const AccordionMenu = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (key) => {
    if (selected === key) {
      return setSelected(null);
    }
    setSelected(key);
  };

  return (
    <div className="Accordion-menu">
      <div key={1} className={selected === 1 ? "Menu-box active" : "Menu-box"}>
        <div className="Menu-box-title" onClick={() => toggle(1)}>
          <QueryStatsIcon fontSize="large" />
          <h2>SUMMARY</h2>
        </div>

        <div className="Menu-box-content">
          <a className="Menu-box-link" href="#0">
            link
          </a>
        </div>
      </div>

      <div key={2} className={selected === 2 ? "Menu-box active" : "Menu-box"}>
        <div className="Menu-box-title" onClick={() => toggle(2)}>
          <PublishedWithChangesIcon fontSize="large" />
          <h2>PUBLISH</h2>
        </div>

        <div className="Menu-box-content">
          <a className="Menu-box-link" href="#0">
            Compose
          </a>
          <a className="Menu-box-link" href="#1">
            Feed
          </a>
        </div>
      </div>

      <div key={3} className={selected === 3 ? "Menu-box active" : "Menu-box"}>
        <div className="Menu-box-title" onClick={() => toggle(3)}>
          <ForumIcon fontSize="large" />
          <h2>ENGAGE</h2>
        </div>
        <div className="Menu-box-content">
          <a className="Menu-box-link" href="#0">
            link
          </a>
        </div>
      </div>

      <div key={4} className={selected === 4 ? "Menu-box active" : "Menu-box"}>
        <div className="Menu-box-title" onClick={() => toggle(4)}>
          <EarbudsIcon fontSize="large" />
          <h2>LISTEN</h2>
        </div>

        <div className="Menu-box-content">
          <a className="Menu-box-link" href="#0">
            link
          </a>
        </div>
      </div>

      <div key={5} className={selected === 5 ? "Menu-box active" : "Menu-box"}>
        <div className="Menu-box-title" onClick={() => toggle(5)}>
          <AssessmentIcon fontSize="large" />
          <h2>REPORT</h2>
        </div>

        <div className="Menu-box-content">
          <a className="Menu-box-link" href="#0">
            link
          </a>
        </div>
      </div>
    </div>
  );
};

export default AccordionMenu;
