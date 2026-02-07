import ActiveStats from "./ActiveStats";
import CTA from "./CTA";
import Features from "./Features";
import LandingPageTopBar from "./LandingPageTopBar";

function LandingPage() {
  return (
    <>
      <LandingPageTopBar />
      <CTA />
      <Features />
      <ActiveStats />
    </>
  );
}

export default LandingPage;
