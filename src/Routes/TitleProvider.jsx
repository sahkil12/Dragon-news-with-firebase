import { useState } from 'react';
import TitleContext from '../main';


const TitleProvider = ({children}) => {
    const [newsTitle, setNewsTitle] =useState(null)

    const collectTitle = {
      setNewsTitle,
      newsTitle,
    }
    return (
        <TitleContext.Provider value={collectTitle}>
            {children}
        </TitleContext.Provider>
    );
};

export default TitleProvider;