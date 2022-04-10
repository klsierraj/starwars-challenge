import Image from 'next/image'
import type { NextPage } from "next";
import CharacterList from "../containers/CharacterList";
import style from '../styles/Home.module.css'


const Home: NextPage = () => {
return (
  <>

      <div className={style.container}>
      <h1 className={style.title}>Star Wars characters</h1>
        <CharacterList />
      </div>

      <footer className={style.footer}>
       <p>Kevin Sierra</p> 
      </footer>
</>
      
 
  );
};

export default Home;

