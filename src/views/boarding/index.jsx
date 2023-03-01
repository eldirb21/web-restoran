import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import usehandleScroll from "../../utils/usehandleScroll";
// import style from "./boarding.module.css";
import styled from "./components/components.module.css";
import Headers from "./components/headers";

export const Boarding = (props) => {
  const scroll = usehandleScroll();
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/sign-in");
  };
  return (
    <div>
      <Headers scroll={scroll} />

      <p>
        Istoria Poloniei își are rădăcinile în sosirea slavilor, care au dat
        semnalul începutului colonizării permanente și dezvoltării istorice pe
        teritoriul actual al Poloniei. În timpul dinastiei Piaștilor a fost
        adoptat creștinismul în 966 și s-a creat o monarhie tipică pentru Evul
        Mediu european. Perioada dinastiei Jagiellone a adus strângerea
        legăturilor cu Marele Ducat al Lituaniei, dezvoltare culturală și
        extindere teritorială, culminând cu formarea Uniunii Polono-Lituaniene
        în 1569. În faza sa inițială, Uniunea constituia o continuare a
        prosperității jagiellone, cu o remarcabilă dezvoltare a unei democrații
        nobiliare sofisticate. De la jumătatea secolului al XVII-lea, marele
        stat a intrat într-o perioadă de declin produsă de războaiele
        devastatoare și de către deteriorarea sistemului de guvernare. S-au
        introdus semnificative reforme interne la sfârșitul secolului al
        XVIII-lea, dar procesului de reformă nu i s-a permis să avanseze, iar
        Imperiul Rus, Regatul Prusiei și Austria Habsburgică, printr-o serie de
        invazii și împărțiri în 1795 au pus capăt existenței Uniunii. De atunci
        și până în 1918 nu a mai existat un stat polonez independent. Polonezii
        s-au angajat intermitent în acțiuni de rezistență armată până în 1864.
        După eșecul ultimei revolte, poporul și-a conservat identitatea
        națională prin educație și printr-un program denumit „munca organică”,
        al cărui scop era acela de a moderniza economia și societatea. Ocazia
        independenței s-a ivit abia după Primul Război Mondial, când puterile
        imperiale implicate în împărțirea Poloniei au fost toate învinse în
        război ori s-au prăbușit în urma revoluției. S-a înființat a Doua
        Republică Poloneză care a existat între 1918 și 1939. Ea a fost distrusă
        de Germania Nazistă și de Uniunea Sovietică după o invazie concertată la
        începutul celui de-al Doilea Război Mondial. Milioane de cetățeni
        polonezi au murit în cursul ocupației naziste. Guvernul polonez în exil
        a continuat să funcționeze și, prin intermediul numeroaselor formațiuni
        militare poloneze de pe Frontul de Vest și cel de Est, polonezii au
        contribuit la victoria Aliaților. Forțele Germaniei Naziste au fost
        obligate să se retragă din Polonia pe măsură ce Armata Roșie înainta,
        ceea ce a dus la apariția Republicii Populare Polone. Poziția geografică
        a Poloniei a fost deplasată către vest, iar Polonia a reapărut ca
        stat-satelit al Uniunii Sovietice. Caracterul multietnic și
        multicultural s-a pierdut și țara a intrat sub un regim totalitar
        comunist. Până la sfârșitul anilor 1980, Solidaritatea, o mișcare
        reformistă autohtonă, a căpătat un rol crucial în tranziția pașnică de
        la dictatura comunistă la o democrație parlamentară capitalistă. Acest
        proces a avut ca rezultat apariția statului polonez modern.
      </p>
    </div>
    //   {/* <div className={style.headerContainer}>
    //     <div className={style.header}>
    //       <h1 className={`title ${style.title}`}>RESTORAN</h1>
    //       <ul>
    //         <li>HOME</li>
    //         <li>MENU</li>
    //         <li>GALLARY</li>
    //         <li>VISIT</li>
    //       </ul>
    //       <button onClick={onLogin}>Login</button>
    //     </div>
    //   </div> */}
    //   {/* <div style={{ zIndex: 999 }}>
    //     <h1>Time, dedication, and darn good eats.</h1>
    //   </div> */}
    // </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Boarding);
