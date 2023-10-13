import React from "react";
import Image from "next/image";
import sawo_kecik from "/public/sawo_kecik_tree.jpg";
import PeruriLogo from "/public/peruri_logo.png";
import BUMNLogo from "/public/bumn_logo.png";
import { BsFillPersonFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { mons, pops } from "@/font/font";
import styles from "./page.module.css";

function KartikaWirjoatmodjo() {
  return (
    <div className={`${styles.main_container} flex flex-col ${pops.className}`}>
      <nav className={`${styles.navbar} flex justify-between`}>
        <Image
          src={BUMNLogo}
          alt="BUMN-logo"
          className={`${styles.bumn_logo}`}
        ></Image>
        <Image
          src={PeruriLogo}
          alt="peruri-logo"
          className={`${styles.peruri_logo}`}
        ></Image>
      </nav>
      <div className={`${styles.tree_image_container} flex justify-center`}>
        <Image
          src={sawo_kecik}
          alt="pohon-sawo-kecik"
          className={`rounded-full ${styles.tree_img}`}
        />
      </div>
      <div className={`${styles.content_container} flex flex-col gap-4`}>
        <div className={`${styles.title_latin_container} text-center`}>
          <h1>POHON SAWO KECIK</h1>
          <em>Manilkara Kauki</em>
        </div>
        <hr className={`${styles.title_line}`} />
        <div
          className={`${styles.person_identity_container} flex flex-col gap-1`}
        >
          <div
            className={`${styles.identity_with_icon} flex items-start gap-2`}
          >
            <BsFillPersonFill className={`mt-1`}></BsFillPersonFill>
            <span>
              Penanam &nbsp;:{" "}
              <span className={`${styles.bold_text}`}>Kartiko Wirjoatmodjo</span>
              <br />
              &emsp; &emsp; &emsp; &ensp; &ensp; &ensp;
              <span className={`${styles.think_text}`}>Wakil Menteri BUMN I</span>
            </span>
          </div>
          <div
            className={`${styles.identity_with_icon} flex items-center gap-2`}
          >
            <FaCalendarAlt></FaCalendarAlt>
            <span>
              Tanggal &ensp; &thinsp;:{" "}
              <span className={`${styles.bold_text}`}>
                Jumat, 13 Oktober 2023
              </span>
            </span>
          </div>
          <div
            className={`${styles.identity_with_icon} flex items-center gap-2`}
          >
            <IoLocationSharp></IoLocationSharp>
            <span>
              Lokasi &emsp; &ensp; :{" "}
              <span className={`${styles.bold_text}`}>Taman Kota Peruri</span>
            </span>
          </div>
        </div>
        <div
          className={`${styles.title_description_container} text-start ${mons.className}`}
        >
          <p>
            <b>Sawo kecik</b> atau <b>Sawo jawa</b> adalah sejenis tanaman
            penghasil buah pangan anggota suku sawo-sawoan atau Sapotaceae.
            Tumbuhan ini biasanya berfungsi sebagai tanaman hias pekarangan dan
            pelindung. Pohon ini menyukai dataran rendah hingga sedang.
          </p>
        </div>
      </div>
    </div>
  );
}

export default KartikaWirjoatmodjo;
