import React from "react";

const Notifikasi = (props) => {
  return (
    <li className="mb-3">
      <img src={props.img} alt="logo" className="w-10" />
      <div className="flex items-center gap-3">
        <h3 className="text-base font-semibold">{props.title}</h3>
        <p className="text-base">berkomentar:</p>
      </div>
      <p className="max-w-[100ch] text-sm whitespace-nowrap text-ellipsis overflow-hidden">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem obcaecati nihil aliquam facere
        autem illum cumque quae dolor quidem et, blanditiis tenetur voluptas ducimus accusamus
        aperiam. Necessitatibus quis quam quas.
      </p>
      <p className="text-xs text-hint mt-1">18 september 2023 | 20.00</p>
      <hr className="mt-3" />
    </li>
  );
};

export default Notifikasi;
