import { PrismicRichText } from "@prismicio/react";
import { Header } from "./Header";

export const Layout = ({
  navigation,
  settings,
  page,
  children,
}) => {
  return (
    <>
      <Header
        navigation={navigation}
        settings={settings}
        page={page}
      />
      <main>
        {children}
      </main>
      <footer>
        <div className="footer-content">
          {navigation.data.footer.map((item, i) => {
            return(
              <div key={`text-footer${i}`}>
                <PrismicRichText field={item.text}/>
              </div>
            )
          })}
        </div>
      </footer>
    </>
  );
};
