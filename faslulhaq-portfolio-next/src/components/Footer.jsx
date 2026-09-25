import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line py-7">
      <div className="container-x flex flex-wrap items-center justify-between gap-2.5">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a href="#home" className="text-sm font-semibold text-accent">
          Back to top
        </a>
      </div>
    </footer>
  );
}
