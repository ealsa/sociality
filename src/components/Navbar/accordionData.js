import { TbDeviceAnalytics as Summary } from "react-icons/tb";
import { FiEdit as Publish } from "react-icons/fi";
import { FaRegComments as Engage } from "react-icons/fa";
import { TbWaveSine as Listen } from "react-icons/tb";
import { AiOutlineLineChart as Report } from "react-icons/ai";

const accordionData = [
  { id: 1, title: "SUMMARY", icon: Summary, liEl1: "Compose", liEl2: "Feed" },
  { id: 2, title: "PUBLISH", icon: Publish, liEl1: "Compose", liEl2: "Feed" },
  { id: 3, title: "ENGAGE", icon: Engage, liEl1: "Compose", liEl2: "Feed" },
  { id: 4, title: "LISTEN", icon: Listen, liEl1: "Compose", liEl2: "Feed" },
  { id: 5, title: "REPORT", icon: Report, liEl1: "Compose", liEl2: "Feed" },
];

export default accordionData;
