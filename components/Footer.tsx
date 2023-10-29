import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-[1700px] w-full py-14 px-4 text-zinc-400">
        <h3 className="text-lg">
          Questions? Call{" "}
          <a className="underline" href="tel:000-800-919-1694">
            000-800-919-1694
          </a>
        </h3>

        <div className="grid md:grid-cols-4 grid-cols-2 py-4">
            <ul>
                <li className="mb-[10px]"><a href="#" className="underline text-sm font-medium">FAQ</a></li>
                <li className="mb-[10px]"><a href="#" className="underline text-sm font-medium">Investor Relations</a></li>
                <li className="mb-[10px]"><a href="#" className="underline text-sm font-medium">Privacy</a></li>
                <li className="mb-[10px]"><a href="#" className="underline text-sm font-medium">Speed Test</a></li>
            </ul>

            <ul>
                <li className="mb-[10px]"><a href="#" className="underline text-sm font-medium">Help Centre</a></li>
                <li className="mb-[10px]"><a href="#" className="underline text-sm font-medium">Jobs</a></li>
                <li className="mb-[10px]"><a href="#" className="underline text-sm font-medium">Cookie Preferences</a></li>
                <li className="mb-[10px]"><a href="#" className="underline text-sm font-medium">Legal Notices</a></li>
            </ul>

            <ul>
                <li className="mb-[10px]"><a href="#" className="underline text-sm font-medium">Account</a></li>
                <li className="mb-[10px]"><a href="#" className="underline text-sm font-medium">Ways to Watch</a></li>
                <li className="mb-[10px]"><a href="#" className="underline text-sm font-medium">Corporate Information</a></li>
                <li className="mb-[10px]"><a href="#" className="underline text-sm font-medium">Only on Netflix</a></li>
            </ul>

            <ul>
                <li className="mb-[10px]"><a href="#" className="underline text-sm font-medium">Media Centre</a></li>
                <li className="mb-[10px]"><a href="#" className="underline text-sm font-medium">Terms of Use</a></li>
                <li className="mb-[10px]"><a href="#" className="underline text-sm font-medium">Contact Us</a></li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
