import grass from "../icons/grass.svg";
import water from "../icons/water.svg";
import fire from "../icons/fire.svg";
import electrict from "../icons/electric.svg";
import bug from "../icons/bug.svg";
import normal from "../icons/normal.svg";
import ice from "../icons/ice.svg";
import psychic from "../icons/psychic.svg";
import poison from "../icons/poison.svg";
import ground from "../icons/ground.svg";
import fairy from "../icons/fairy.svg";
import fighting from "../icons/fighting.svg";
import rock from "../icons/rock.svg";
import ghost from "../icons/ghost.svg";
export const typeIcon = {
    water: [water,"blue"],
    fire: [fire,"red"],
    electric: [electrict,"yellow"],
    grass: [grass,"green"],
    bug: [bug,"green"],
    normal: [normal,"fuchsia"],
    ice: [ice,"aquamarine"],
    psychic: [psychic,"orange"],
    poison:[poison,"purple"],
    ground:[ground,"brown"],
    fairy:[fairy,"fuchsia"],
    fighting:[fighting,"red"],
    rock:[rock,"grey"],
    ghost:[ghost,"darkblue"]
  };
  export const selectIcon = (type) => {
    if (typeIcon.hasOwnProperty(type)) {
      return typeIcon[type];
    }
  };