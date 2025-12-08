import React from "react";
import tickitz from "../assets/Tickitz2.png";
import { Link } from "react-router";
import ebv from "../assets/ebv.png";
import cineOne21 from "../assets/cineOne21.png";
import hiflix from "../assets/hiflix.png";
import facebook from "../assets/facebooks.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 text-sm text-slate-500">
        {/* 4 kolom */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Logo + teks */}
          <div className="md:w-1/3">
            <img src={tickitz} alt="tickitz" className="h-10 mb-4" />
            <p className="max-w-xs leading-relaxed">
              Stop waiting in line. Buy tickets conveniently, watch movies
              quietly.
            </p>
          </div>

          {/* Explore */}
          <div className="md:w-1/6">
            <h2 className="font-medium text-sm text-slate-900 mb-3">Explore</h2>
            <div className="flex flex-col gap-2 text-xs text-slate-500">
              <Link>Cinemas</Link>
              <Link>Movies List</Link>
              <Link>My Ticket</Link>
              <Link>Notification</Link>
            </div>
          </div>

          {/* Our Sponsor */}
          <div className="md:w-1/4">
            <h2 className="font-medium text-sm text-slate-900 mb-3">
              Our Sponsor
            </h2>
            <div className="flex flex-col gap-4 items-start">
              <img
                src={ebv}
                alt="ebv"
                className="max-h-6 w-auto object-contain"
              />
              <img
                src={cineOne21}
                alt="CineOne21"
                className="max-h-6 w-auto object-contain"
              />
              <img
                src={hiflix}
                alt="hiflix"
                className="max-h-6 w-auto object-contain"
              />
            </div>
          </div>

          {/* Follow us */}
          <div className="md:w-1/4">
            <h2 className="font-medium text-sm text-slate-900 mb-3">
              Follow us
            </h2>
            <div className="flex flex-col gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <img src={facebook} alt="facebook" className="h-4 w-4" />
                <span>Tickitz Cinema id</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={instagram} alt="instagram" className="h-4 w-4" />
                <span>tickitz.id</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={twitter} alt="twitter" className="h-4 w-4" />
                <span>tickitz.id</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={youtube} alt="youtube" className="h-4 w-4" />
                <span>Tickitz Cinema id</span>
              </div>
            </div>
          </div>
        </div>

        {/* copyright */}
        <p className="mt-10 text-[11px] text-center text-slate-400">
          © 2020 Tickitz. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
