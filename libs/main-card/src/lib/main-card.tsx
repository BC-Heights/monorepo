// @ts-expect-error TS7016: Importing jsx file
import Wrapped from './wrapped';

export interface MainCardProps {

}

export function MainCard(props: MainCardProps) {
  return <Wrapped></Wrapped>
}

export default MainCard;
