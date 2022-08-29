import { Roulette } from './Roulette.jsx';
import { Sheets } from './Sheets.jsx';
import classes from './roulette.module.css';

export const BingoGame = () => {
  return (
    <>
      <div className={classes.container} >
        <section className={classes.routetteContainer}>
          <Roulette />
        </section>
        <section className={classes.sheetsContainer}>
          <Sheets />
        </section>
      </div>
    </>
  )
}