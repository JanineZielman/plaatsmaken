import { PrismicRichText } from "@prismicio/react";
import { Header } from "./Header";

export const Layout = ({
  navigation,
  settings,
  children,
}) => {
  return (
    <>
      <Header
        navigation={navigation}
        settings={settings}
      />
      <main>
        {children}
      </main>
      <footer>
        {navigation.data.footer.map((item, i) => {
          return(
            <div key={`text-footer${i}`}>
              <PrismicRichText field={item.text}/>
            </div>
          )
        })}
      </footer>
    </>
  );
};
