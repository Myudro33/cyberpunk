import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-white">
      <div className="my-32 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-12">
          <div>
            <h1 className="text-lg font-bold">Company</h1>
            <ul className="mt-1">
              <li>Submenu 1</li>
              <li>Submenu 2</li>
              <li>Submenu 3</li>
              <li>Submenu 4</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-bold">Support</h1>
            <ul className="mt-1">
              <li>Submenu 1</li>
              <li>Submenu 2</li>
              <li>Submenu 3</li>
              <li>Submenu 4</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-bold">Developer Api</h1>
            <ul className="mt-1">
              <li>Submenu 1</li>
              <li>Submenu 2</li>
              <li>Submenu 3</li>
              <li>Submenu 4</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-bold">Stuff</h1>
            <ul className="mt-1">
              <li>Submenu 1</li>
              <li>Submenu 2</li>
              <li>Submenu 3</li>
              <li>Submenu 4</li>
            </ul>
          </div>
        </div>
        <p className="my-12 text-center text-sm text-thBlue cursor-pointer hover:text-thOrange">Ⓒ Copyright Nika LLC</p>
      </div>
    </div>
  );
};

export default Footer;
