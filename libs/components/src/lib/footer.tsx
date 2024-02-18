import Image from 'next/image';

export function Footer() {
  return (
    <div>
      <Image
        src="https://heights-photos.s3.amazonaws.com/wp-content/uploads/2020/04/05191511/compromise2-300x64.png"
        width={300}
        height={64}
        alt="logo"
      />
    </div>
  );
}

export default Footer;
