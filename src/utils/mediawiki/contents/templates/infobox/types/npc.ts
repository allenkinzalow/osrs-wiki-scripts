import MediaWikiDate from "../../../date";
import MediaWikiFile from "../../../file";
import MediaWikiLink from "../../../link";

type InfoboxNpc = {
  name: string;
  image: MediaWikiFile;
  release: MediaWikiDate | "";
  update: MediaWikiLink | "";
  removal?: MediaWikiDate;
  removalupdate?: MediaWikiDate;
  aka?: string;
  level?: string;
  members: boolean;
  race?: string;
  quest?: string;
  location?: string;
  shop?: MediaWikiLink;
  gender?: string;
  options?: string[];
  examine: string;
  id: string;
  trailblazerRegion?: string;
};

export default InfoboxNpc;
