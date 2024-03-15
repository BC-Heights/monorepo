import Image from 'next/image';
import Link from 'next/link';

export default function EEdition() {
  return (
    <div className="flex w-full flex-row gap-4 pb-4 md:flex-col md:pl-8">
      <div className="w-1/2 md:w-full">
        <div className="p-t-[max(60%, 326px)] relative h-[270px] w-full">
          <iframe
            title="E-Edition of The Heights"
            className="inset-0 size-full border-none"
            allow="clipboard-write allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
            allowFullScreen={true}
            src="https://e.issuu.com/embed.html?backgroundColor=%23232323&backgroundColorFullscreen=%23232323&d=the_heights_dec_4_2023&hideIssuuLogo=true&u=bcheights"
          />
        </div>
      </div>
      <div className="flex w-1/2 flex-col md:w-full md:flex-col-reverse">
        <Link href="http://eepurl.com/gB0i79">
          <Image
            src={
              'https://s3.amazonaws.com/heights-photos/wp-content/uploads/2023/02/27003123/Newsletter-372x195.png'
            }
            width={372}
            height={195}
            alt={'Subscribe to the Newsletter'}
          />
        </Link>
        <h2 className="my-4 text-center text-xl">
          <strong>
            <span>
              Click <text className="hidden md:inline">Above </text> To Access
              The Most Recent{' '}
              <a href="https://www.bcheights.com/e-edition-2/">
                E-Edition Of <em>The Heights</em>
              </a>
            </span>
          </strong>
        </h2>
      </div>
    </div>
  );
}
