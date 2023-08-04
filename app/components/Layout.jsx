import {useIsHomePath} from '~/lib/utils';
import {
  Drawer,
  useDrawer,
  Text,
  Input,
  IconLogin,
  IconAccount,
  IconBag,
  IconSearch,
  Heading,
  IconMenu,
  IconCaret,
  Section,
  CountrySelector,
  Cart,
  CartLoading,
  Link,
  Hero,
  FullPageScroll,
} from '~/components';
import {useParams, Form, Await, useMatches} from '@remix-run/react';
import {useWindowScroll} from 'react-use';
import {Disclosure} from '@headlessui/react';
import {Suspense, useEffect, useMemo} from 'react';
import {useIsHydrated} from '~/hooks/useIsHydrated';
import {useCartFetchers} from '~/hooks/useCartFetchers';
import ReactDOM from 'react-dom';



export function Layout({children, layout}) {
  return (
     <>
 <div id="well" className="well">
    <section className="panelscroll relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <div className="flex flex-col items-center justify-center video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
            <video playsInline poster="https://cdn.shopify.com/s/files/1/0741/4464/5438/files/AdobeStock_141156360_PosterImage.png" loop muted autoPlay type="video/mp4" src="https://cdn.shopify.com/videos/c/o/v/a6561bb92f7541df8b3670a15c9ad59c.mp4" className="min-w-full min-h-full absolute object-cover"></video> <img alt="bannerimg" className="bannerimg animate__animated animate__zoomIn animate__delay-3s" src="https://cdn.shopify.com/s/files/1/0741/4464/5438/files/bannerimg.png" />
            <div className="bottombannertext animate__animated animate__fadeInLeft animate__delay-3s">
                <h2>creative concepts+ <span>brand consultancy</span></h2>
            </div>
        </div>
    </section>
    <section className="panelscroll videosection relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3"><header>
        <div className="hadermain">
            <div className="headerlogo"><svg viewBox="0 0 75 46.313" height="46.313" width="75"><defs><clipPath id="clipPath"><rect height="46.313" width="75" data-name="Rectangle 1" id="Rectangle_1"></rect></clipPath></defs><g transform="translate(-230 -0.2)" data-name="Group 2" id="Group_2"><g clipPath="url(#clipPath)" transform="translate(230 0.2)" data-name="Group 1" id="Group_1"><path transform="translate(0 0)" d="M74.6,36.589a26.732,26.732,0,0,0-15.026-7.5,1.336,1.336,0,0,0-.386,2.643,24.084,24.084,0,0,1,12.518,5.808,24.623,24.623,0,0,1-31.083,1.116A27.272,27.272,0,0,0,64.375,11.9a1.342,1.342,0,0,0-.39-.95,1.27,1.27,0,0,0-.975-.393,26.758,26.758,0,0,0-15.638,5.121,1.336,1.336,0,0,0,1.569,2.162A24.112,24.112,0,0,1,61.657,13.27,24.6,24.6,0,0,1,40.422,35.982,27.155,27.155,0,0,0,38.4.388a1.356,1.356,0,0,0-1.9,0A26.729,26.729,0,0,0,29,15.413a1.336,1.336,0,0,0,2.643.387A24.1,24.1,0,0,1,37.452,3.282a24.084,24.084,0,0,1,5.991,16.46,24.511,24.511,0,0,1-5.034,14.481A27.144,27.144,0,0,0,11.975,10.559a1.335,1.335,0,0,0-1.355,1.335v2.479c0,.043,0,.088.007.135a26.9,26.9,0,0,0,4.714,12.669,1.335,1.335,0,0,0,2.41-.534,1.325,1.325,0,0,0-.221-1A24.224,24.224,0,0,1,13.291,14.3V13.282A24.082,24.082,0,0,1,29.1,20.7a24.438,24.438,0,0,1,6.639,13.719A27.14,27.14,0,0,0,.4,36.5a1.328,1.328,0,0,0-.4.947,1.342,1.342,0,0,0,.391.952l1.747,1.747a1.3,1.3,0,0,0,.106.1,26.965,26.965,0,0,0,16.994,6.036h.052A26.91,26.91,0,0,0,33,42.524a1.336,1.336,0,0,0-1.363-2.3,24.241,24.241,0,0,1-12.338,3.381h-.068A24.29,24.29,0,0,1,3.985,38.213l-.724-.723a24.414,24.414,0,0,1,33.089,1l0,0h0l.008.007a27,27,0,0,0,19.111,7.816h0A27.02,27.02,0,0,0,74.6,38.488a1.335,1.335,0,0,0,0-1.9" data-name="Path 1" id="Path_1"></path></g></g></svg></div>
            <div className="headercall"><a className="headermail" href="mailto:hi@nakite.studio">hi@nakite.studio</a> <a className="headercall" href="tel:+31(0)202443252">+31 (0)20 244 32 52</a></div>
        </div>
    </header>
        <div className="flex w-11/12 mb-0 items-center">
            <div className="w-3/5">
                <div className="videobox"><video playsInline loop muted autoPlay type="video/mp4" src="https://cdn.shopify.com/videos/c/o/v/a7f42d907be24ba49dca1ba62dc07c45.mp4" className="min-w-full min-h-full object-cover"></video></div>
            </div>
            <div className="w-2/5">
                <div className="textdescription">
                    <p>Capturing. Tickling the senses. To provoke and play with powerful emotions. Envy, Lust, Pride… Focussed on perfection. The never-ending chase towards stronger Brand Experience, Brand Attitude, Brand Attachment and Brand Equity. Proven drivers of conversion, loyalty, retention and sales. Brand experts. Design by trade. Creators of immersive customer journeys. Builders of brands.</p>
                </div>
            </div>
        </div>
        <footer>
            <p>© Copyright 2023 Nakité BV, all rights reserved.</p>
        </footer></section>
    <section className="panelscroll bg-black relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3"><header>
        <div className="hadermain">
            <div className="headerlogo"><svg viewBox="0 0 75 46.313" height="46.313" width="75"><defs><clipPath id="clipPath"><rect fill="#fff" height="46.313" width="75" data-name="Rectangle 1" id="Rectangle_1"></rect></clipPath></defs><g transform="translate(-230 -0.2)" data-name="Group 2" id="Group_2"><g clipPath="url(#clipPath)" transform="translate(230 0.2)" data-name="Group 1" id="Group_1"><path fill="#fff" transform="translate(0 0)" d="M74.6,36.589a26.732,26.732,0,0,0-15.026-7.5,1.336,1.336,0,0,0-.386,2.643,24.084,24.084,0,0,1,12.518,5.808,24.623,24.623,0,0,1-31.083,1.116A27.272,27.272,0,0,0,64.375,11.9a1.342,1.342,0,0,0-.39-.95,1.27,1.27,0,0,0-.975-.393,26.758,26.758,0,0,0-15.638,5.121,1.336,1.336,0,0,0,1.569,2.162A24.112,24.112,0,0,1,61.657,13.27,24.6,24.6,0,0,1,40.422,35.982,27.155,27.155,0,0,0,38.4.388a1.356,1.356,0,0,0-1.9,0A26.729,26.729,0,0,0,29,15.413a1.336,1.336,0,0,0,2.643.387A24.1,24.1,0,0,1,37.452,3.282a24.084,24.084,0,0,1,5.991,16.46,24.511,24.511,0,0,1-5.034,14.481A27.144,27.144,0,0,0,11.975,10.559a1.335,1.335,0,0,0-1.355,1.335v2.479c0,.043,0,.088.007.135a26.9,26.9,0,0,0,4.714,12.669,1.335,1.335,0,0,0,2.41-.534,1.325,1.325,0,0,0-.221-1A24.224,24.224,0,0,1,13.291,14.3V13.282A24.082,24.082,0,0,1,29.1,20.7a24.438,24.438,0,0,1,6.639,13.719A27.14,27.14,0,0,0,.4,36.5a1.328,1.328,0,0,0-.4.947,1.342,1.342,0,0,0,.391.952l1.747,1.747a1.3,1.3,0,0,0,.106.1,26.965,26.965,0,0,0,16.994,6.036h.052A26.91,26.91,0,0,0,33,42.524a1.336,1.336,0,0,0-1.363-2.3,24.241,24.241,0,0,1-12.338,3.381h-.068A24.29,24.29,0,0,1,3.985,38.213l-.724-.723a24.414,24.414,0,0,1,33.089,1l0,0h0l.008.007a27,27,0,0,0,19.111,7.816h0A27.02,27.02,0,0,0,74.6,38.488a1.335,1.335,0,0,0,0-1.9" data-name="Path 1" id="Path_1"></path></g></g></svg></div>
            <div className="headercall"><a className="headermail" href="mailto:hi@nakite.studio">hi@nakite.studio</a> <a className="headercall" href="tel:+31(0)202443252">+31 (0)20 244 32 52</a></div>
        </div>
    </header>
        <div className="flex w-full mb-0 items-center">
            <div className="w-2/5">
                <div className="textdescription-third">
                    <p>The journey. Where does it start? Where should it convert? Down the rabbit hole. “The customer is always right”, but “people don’t know what they want before they see it.” We design effective and converting customer journeys, that customers love. Online, in-store, digital and offline, we take the essence of the brand, deeply analyze the consumer, and map out a journey that leads to more conversion and sales.</p>
                </div>
            </div>
            <div className="w-3/5"><img alt="bannerimg" className="min-w-full min-h-full object-cover" src="https://cdn.shopify.com/s/files/1/0741/4464/5438/files/sava-text-testimonial-1.png" /></div>
        </div>
        <footer>
            <p>© Copyright 2023 Nakité BV, all rights reserved.</p>
        </footer></section>
    <section className="panelscroll fullimgsection fullimgsectionmain relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3"><header>
        <div className="hadermain">
            <div className="headerlogo"><svg viewBox="0 0 75 46.313" height="46.313" width="75"><defs><clipPath id="clipPath"><rect height="46.313" width="75" data-name="Rectangle 1" id="Rectangle_1"></rect></clipPath></defs><g transform="translate(-230 -0.2)" data-name="Group 2" id="Group_2"><g clipPath="url(#clipPath)" transform="translate(230 0.2)" data-name="Group 1" id="Group_1"><path transform="translate(0 0)" d="M74.6,36.589a26.732,26.732,0,0,0-15.026-7.5,1.336,1.336,0,0,0-.386,2.643,24.084,24.084,0,0,1,12.518,5.808,24.623,24.623,0,0,1-31.083,1.116A27.272,27.272,0,0,0,64.375,11.9a1.342,1.342,0,0,0-.39-.95,1.27,1.27,0,0,0-.975-.393,26.758,26.758,0,0,0-15.638,5.121,1.336,1.336,0,0,0,1.569,2.162A24.112,24.112,0,0,1,61.657,13.27,24.6,24.6,0,0,1,40.422,35.982,27.155,27.155,0,0,0,38.4.388a1.356,1.356,0,0,0-1.9,0A26.729,26.729,0,0,0,29,15.413a1.336,1.336,0,0,0,2.643.387A24.1,24.1,0,0,1,37.452,3.282a24.084,24.084,0,0,1,5.991,16.46,24.511,24.511,0,0,1-5.034,14.481A27.144,27.144,0,0,0,11.975,10.559a1.335,1.335,0,0,0-1.355,1.335v2.479c0,.043,0,.088.007.135a26.9,26.9,0,0,0,4.714,12.669,1.335,1.335,0,0,0,2.41-.534,1.325,1.325,0,0,0-.221-1A24.224,24.224,0,0,1,13.291,14.3V13.282A24.082,24.082,0,0,1,29.1,20.7a24.438,24.438,0,0,1,6.639,13.719A27.14,27.14,0,0,0,.4,36.5a1.328,1.328,0,0,0-.4.947,1.342,1.342,0,0,0,.391.952l1.747,1.747a1.3,1.3,0,0,0,.106.1,26.965,26.965,0,0,0,16.994,6.036h.052A26.91,26.91,0,0,0,33,42.524a1.336,1.336,0,0,0-1.363-2.3,24.241,24.241,0,0,1-12.338,3.381h-.068A24.29,24.29,0,0,1,3.985,38.213l-.724-.723a24.414,24.414,0,0,1,33.089,1l0,0h0l.008.007a27,27,0,0,0,19.111,7.816h0A27.02,27.02,0,0,0,74.6,38.488a1.335,1.335,0,0,0,0-1.9" data-name="Path 1" id="Path_1"></path></g></g></svg></div>
            <div className="headercall"><a className="headermail" href="mailto:hi@nakite.studio">hi@nakite.studio</a> <a className="headercall" href="tel:+31(0)202443252">+31 (0)20 244 32 52</a></div>
        </div>
    </header>
        <div className="textdescription-third">
            <p>The vision and narrative of a brand should be felt and seen throughout any customer journey. We help brands with finger-licking content to emphasize the message. We offer art direction and work with the best people in the creative industry. Designers, photographers, social engineers, coders, filmmakers, you name it.</p>
        </div>
        <footer>
            <p>© Copyright 2023 Nakité BV, all rights reserved.</p>
        </footer></section>
    <section className="panelscroll panelscroll bg-black fullimgsection lastfullslide relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <div className="videoboxlastpage"><video playsInline loop muted autoPlay type="video/mp4" src="https://cdn.shopify.com/videos/c/o/v/20632fe8fdc64e1e9a9f30112e0f0607.mp4" className="min-w-full min-h-full object-cover"></video></div>
        <header>
            <div className="hadermain">
                <div className="headerlogo"><svg viewBox="0 0 75 46.313" height="46.313" width="75"><defs><clipPath id="clipPath"><rect fill="#fff" height="46.313" width="75" data-name="Rectangle 1" id="Rectangle_1"></rect></clipPath></defs><g transform="translate(-230 -0.2)" data-name="Group 2" id="Group_2"><g clipPath="url(#clipPath)" transform="translate(230 0.2)" data-name="Group 1" id="Group_1"><path fill="#fff" transform="translate(0 0)" d="M74.6,36.589a26.732,26.732,0,0,0-15.026-7.5,1.336,1.336,0,0,0-.386,2.643,24.084,24.084,0,0,1,12.518,5.808,24.623,24.623,0,0,1-31.083,1.116A27.272,27.272,0,0,0,64.375,11.9a1.342,1.342,0,0,0-.39-.95,1.27,1.27,0,0,0-.975-.393,26.758,26.758,0,0,0-15.638,5.121,1.336,1.336,0,0,0,1.569,2.162A24.112,24.112,0,0,1,61.657,13.27,24.6,24.6,0,0,1,40.422,35.982,27.155,27.155,0,0,0,38.4.388a1.356,1.356,0,0,0-1.9,0A26.729,26.729,0,0,0,29,15.413a1.336,1.336,0,0,0,2.643.387A24.1,24.1,0,0,1,37.452,3.282a24.084,24.084,0,0,1,5.991,16.46,24.511,24.511,0,0,1-5.034,14.481A27.144,27.144,0,0,0,11.975,10.559a1.335,1.335,0,0,0-1.355,1.335v2.479c0,.043,0,.088.007.135a26.9,26.9,0,0,0,4.714,12.669,1.335,1.335,0,0,0,2.41-.534,1.325,1.325,0,0,0-.221-1A24.224,24.224,0,0,1,13.291,14.3V13.282A24.082,24.082,0,0,1,29.1,20.7a24.438,24.438,0,0,1,6.639,13.719A27.14,27.14,0,0,0,.4,36.5a1.328,1.328,0,0,0-.4.947,1.342,1.342,0,0,0,.391.952l1.747,1.747a1.3,1.3,0,0,0,.106.1,26.965,26.965,0,0,0,16.994,6.036h.052A26.91,26.91,0,0,0,33,42.524a1.336,1.336,0,0,0-1.363-2.3,24.241,24.241,0,0,1-12.338,3.381h-.068A24.29,24.29,0,0,1,3.985,38.213l-.724-.723a24.414,24.414,0,0,1,33.089,1l0,0h0l.008.007a27,27,0,0,0,19.111,7.816h0A27.02,27.02,0,0,0,74.6,38.488a1.335,1.335,0,0,0,0-1.9" data-name="Path 1" id="Path_1"></path></g></g></svg></div>
                <div className="headercall"><a className="headermail" href="mailto:hi@nakite.studio">hi@nakite.studio</a> <a className="headercall" href="tel:+31(0)202443252">+31 (0)20 244 32 52</a></div>
            </div>
        </header>
        <div className="textdescription-third flex w-full mb-0 items-center">
            <div className="last-page">
                <div className="last-page-left">
                    <h5>Intrigued?</h5>
                </div>
                <div className="last-page-right"><address>Nakité <br /> Singel 63 <br />1012 VD Amsterdam <br /> The Netherlands</address>
                    <ul>
                        <li><a href="tel:+31(0)202443252">+31 (0)20 244 32 52</a></li>
                        <li><a href="mailto:hi@nakite.studio">hi@nakite.studio</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <footer>
            <p>© Copyright 2023 Nakité BV, all rights reserved.</p>
        </footer></section>
</div>
        </>
    
  );
}


function Header({title, menu}) {
  const isHome = useIsHomePath();

  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart,
  } = useDrawer();

  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();

  const addToCartFetchers = useCartFetchers('ADD_TO_CART');

  // toggle cart drawer when adding to cart
  useEffect(() => {
    if (isCartOpen || !addToCartFetchers.length) return;
    openCart();
  }, [addToCartFetchers, isCartOpen, openCart]);

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      {menu && (
        <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} menu={menu} />
      )}
      <DesktopHeader
        isHome={isHome}
        title={title}
        menu={menu}
        openCart={openCart}
      />
      <MobileHeader
        isHome={isHome}
        title={title}
        openCart={openCart}
        openMenu={openMenu}
      />
    </>
  );
}

function CartDrawer({isOpen, onClose}) {
  const [root] = useMatches();

  return (
    <Drawer open={isOpen} onClose={onClose} heading="Cart" openFrom="right">
      <div classNameName="grid">
        <Suspense fallback={<CartLoading />}>
          <Await resolve={root.data?.cart}>
            {(cart) => <Cart layout="drawer" onClose={onClose} cart={cart} />}
          </Await>
        </Suspense>
      </div>
    </Drawer>
  );
}

export function MenuDrawer({isOpen, onClose, menu}) {
  return (
    <Drawer open={isOpen} onClose={onClose} openFrom="left" heading="Menu">
      <div classNameName="grid">
        <MenuMobileNav menu={menu} onClose={onClose} />
      </div>
    </Drawer>
  );
}

function MenuMobileNav({menu, onClose}) {
  return (
    <nav classNameName="grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8">
      {/* Top level menu items */}
      {(menu?.items || []).map((item) => (
        <span key={item.id} classNameName="block">
          <Link
            to={item.to}
            target={item.target}
            onClick={onClose}
            classNameName={({isActive}) =>
              isActive ? 'pb-1 border-b -mb-px' : 'pb-1'
            }
          >
            <Text as="span" size="copy">
              {item.title}
            </Text>
          </Link>
        </span>
      ))}
    </nav>
  );
}

function MobileHeader({title, isHome, openCart, openMenu}) {
  // useHeaderStyleFix(containerStyle, setContainerStyle, isHome);

  const params = useParams();

  return (
    <header
      role="banner"
      classNameName={`${
        isHome
          ? 'bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader'
          : 'bg-contrast/80 text-primary'
      } flex lg:hidden items-center h-nav sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 px-4 md:px-8`}
    >
      <div classNameName="flex items-center justify-start w-full gap-4">
        <button
          onClick={openMenu}
          classNameName="relative flex items-center justify-center w-8 h-8"
        >
          <IconMenu />
        </button>
        <Form
          method="get"
          action={params.lang ? `/${params.lang}/search` : '/search'}
          classNameName="items-center gap-2 sm:flex"
        >
          <button
            type="submit"
            classNameName="relative flex items-center justify-center w-8 h-8"
          >
            <IconSearch />
          </button>
          <Input
            classNameName={
              isHome
                ? 'focus:border-contrast/20 dark:focus:border-primary/20'
                : 'focus:border-primary/20'
            }
            type="search"
            variant="minisearch"
            placeholder="Search"
            name="q"
          />
        </Form>
      </div>

      <Link
        classNameName="flex items-center self-stretch leading-[3rem] md:leading-[4rem] justify-center flex-grow w-full h-full"
        to="/"
      >
        <Heading
          classNameName="font-bold text-center leading-none"
          as={isHome ? 'h1' : 'h2'}
        >
          {title}
        </Heading>
      </Link>

      <div classNameName="flex items-center justify-end w-full gap-4">
        <AccountLink classNameName="relative flex items-center justify-center w-8 h-8" />
        <CartCount isHome={isHome} openCart={openCart} />
      </div>
    </header>
  );
}

function DesktopHeader({isHome, menu, openCart, title}) {
  const params = useParams();
  const {y} = useWindowScroll();
  return (
    <header
      role="banner"
      classNameName={`${
        isHome
          ? 'bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader'
          : 'bg-contrast/80 text-primary'
      } ${
        !isHome && y > 50 && ' shadow-lightHeader'
      } hidden h-nav lg:flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8`}
    >
      <div classNameName="flex gap-12">
        <Link classNameName="font-bold" to="/" prefetch="intent">
          {title}
        </Link>
        <nav classNameName="flex gap-8">
          {/* Top level menu items */}
          {(menu?.items || []).map((item) => (
            <Link
              key={item.id}
              to={item.to}
              target={item.target}
              prefetch="intent"
              classNameName={({isActive}) =>
                isActive ? 'pb-1 border-b -mb-px' : 'pb-1'
              }
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <div classNameName="flex items-center gap-1">
        <Form
          method="get"
          action={params.lang ? `/${params.lang}/search` : '/search'}
          classNameName="flex items-center gap-2"
        >
          <Input
            classNameName={
              isHome
                ? 'focus:border-contrast/20 dark:focus:border-primary/20'
                : 'focus:border-primary/20'
            }
            type="search"
            variant="minisearch"
            placeholder="Search"
            name="q"
          />
          <button
            type="submit"
            classNameName="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
          >
            <IconSearch />
          </button>
        </Form>
        <AccountLink classNameName="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5" />
        <CartCount isHome={isHome} openCart={openCart} />
      </div>
    </header>
  );
}

function AccountLink({classNameName}) {
  const [root] = useMatches();
  const isLoggedIn = root.data?.isLoggedIn;
  return isLoggedIn ? (
    <Link to="/account" classNameName={classNameName}>
      <IconAccount />
    </Link>
  ) : (
    <Link to="/account/login" classNameName={classNameName}>
      <IconLogin />
    </Link>
  );
}

function CartCount({isHome, openCart}) {
  const [root] = useMatches();

  return (
    <Suspense fallback={<Badge count={0} dark={isHome} openCart={openCart} />}>
      <Await resolve={root.data?.cart}>
        {(cart) => (
          <Badge
            dark={isHome}
            openCart={openCart}
            count={cart?.totalQuantity || 0}
          />
        )}
      </Await>
    </Suspense>
  );
}

function Badge({openCart, dark, count}) {
  const isHydrated = useIsHydrated();

  const BadgeCounter = useMemo(
    () => (
      <>
        <IconBag />
        <div
          classNameName={`${
            dark
              ? 'text-primary bg-contrast dark:text-contrast dark:bg-primary'
              : 'text-contrast bg-primary'
          } absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`}
        >
          <span>{count || 0}</span>
        </div>
      </>
    ),
    [count, dark],
  );

  return isHydrated ? (
    <button
      onClick={openCart}
      classNameName="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
    >
      {BadgeCounter}
    </button>
  ) : (
    <Link
      to="/cart"
      classNameName="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
    >
      {BadgeCounter}
    </Link>
  );
}

function Footer({menu}) {
  const isHome = useIsHomePath();
  const itemsCount = menu
    ? menu?.items?.length + 1 > 4
      ? 4
      : menu?.items?.length + 1
    : [];

  return (
    <Section
      divider={isHome ? 'none' : 'top'}
      as="footer"
      role="contentinfo"
      classNameName={`grid min-h-[25rem] items-start grid-flow-row w-full gap-6 py-8 px-6 md:px-8 lg:px-12 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-${itemsCount}
        bg-primary dark:bg-contrast dark:text-primary text-contrast overflow-hidden`}
    >
      <FooterMenu menu={menu} />
      <CountrySelector />
      <div
        classNameName={`self-end pt-8 opacity-50 md:col-span-2 lg:col-span-${itemsCount}`}
      >
        &copy; {new Date().getFullYear()} / Shopify, Inc. Hydrogen is an MIT
        Licensed Open Source project.
      </div>
    </Section>
  );
}

const FooterLink = ({item}) => {
  if (item.to.startsWith('http')) {
    return (
      <a href={item.to} target={item.target} rel="noopener noreferrer">
        {item.title}
      </a>
    );
  }

  return (
    <Link to={item.to} target={item.target} prefetch="intent">
      {item.title}
    </Link>
  );
};

function FooterMenu({menu}) {
  const styles = {
    section: 'grid gap-4',
    nav: 'grid gap-2 pb-6',
  };

  return (
    <>
      {(menu?.items || []).map((item) => (
        <section key={item.id} classNameName={styles.section}>
          <Disclosure>
            {({open}) => (
              <>
                <Disclosure.Button classNameName="text-left md:cursor-default">
                  <Heading classNameName="flex justify-between" size="lead" as="h3">
                    {item.title}
                    {item?.items?.length > 0 && (
                      <span classNameName="md:hidden">
                        <IconCaret direction={open ? 'up' : 'down'} />
                      </span>
                    )}
                  </Heading>
                </Disclosure.Button>
                {item?.items?.length > 0 ? (
                  <div
                    classNameName={`${
                      open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`
                    } overflow-hidden transition-all duration-300`}
                  >
                    <Suspense data-comment="This suspense fixes a hydration bug in Disclosure.Panel with static prop">
                      <Disclosure.Panel static>
                        <nav classNameName={styles.nav}>
                          {item.items.map((subItem) => (
                            <FooterLink key={subItem.id} item={subItem} />
                          ))}
                        </nav>
                      </Disclosure.Panel>
                    </Suspense>
                  </div>
                ) : null}
              </>
            )}
          </Disclosure>
        </section>
      ))}
    </>
  );
}
