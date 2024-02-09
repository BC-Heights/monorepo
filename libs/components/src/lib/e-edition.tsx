import Image from 'next/image';

export default function EEdition() {
  return (
    <div className="flex flex-row w-full gap-4 pb-4 pl-8 md:flex-col md:px-8 md:mr-8">
      <div className="w-1/2 md:w-full">
        <div className="relative p-t-[max(60%, 326px)] w-full h-[270px]">
          <iframe
            title="E-Edition of The Heights"
            className="border-none size-full inset-0"
            allow="clipboard-write allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
            allowFullScreen={true}
            src="https://e.issuu.com/embed.html?backgroundColor=%23232323&backgroundColorFullscreen=%23232323&d=the_heights_dec_4_2023&hideIssuuLogo=true&u=bcheights"
          />
        </div>
      </div>
      <div className="flex flex-col w-1/2 md:flex-col-reverse md:w-full">
        <Image
          src={
            'https://s3.amazonaws.com/heights-photos/wp-content/uploads/2023/02/27003123/Newsletter-372x195.png'
          }
          width={372}
          height={195}
          alt={'Subscribe to the Newsletter'}
        />
        <h2 className="text-center my-4 text-xl">
          <strong>
            <span>
              Click <text className='hidden md:inline'>Above </text> To Access The Most Recent{' '}
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
