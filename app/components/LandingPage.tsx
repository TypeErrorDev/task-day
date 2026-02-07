import ActiveStats from "./ActiveStats";
import CTA from "./CTA";
import CTABottom from "./CTABottom";
import Features from "./Features";
// import LandingPageTopBar from "./LandingPageTopBar";

function LandingPage() {
  return (
    <>
      {/* <LandingPageTopBar /> */}
      <CTA />
      <Features />
      <ActiveStats />
      <CTABottom />
    </>
  );
}

export default LandingPage;
