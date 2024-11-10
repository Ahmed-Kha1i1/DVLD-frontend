function SideLogo() {
  return (
    <div className="mx-auto mb-14 w-36 xl:w-16 md:hidden">
      <picture>
        <source srcSet="/logo-just-pic.png" media="(max-width: 1279px)" />
        <img src="/sideLogo.png" alt="logo" className="xl:w-16" />
      </picture>
    </div>
  );
}

export default SideLogo;
