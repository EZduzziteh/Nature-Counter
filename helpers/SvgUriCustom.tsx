import React, { useEffect, useState } from 'react';
import { UriProps, SvgXml } from 'react-native-svg';

const SvgUriCustom = (props = UriProps) => {
  const [xml, setXml] = useState<null | string>(null);

  useEffect(() => {
    function fetchXml() {
      const fetchController = new AbortController();

      if (props.uri !== null) {

        fetch(props.uri, { signal: fetchController.signal })
          .then((response) => response.text())
          .then(setXml)
          .catch((err)=> {
            console.log("svgUri error:", err.message);
            alert(err.message);
          });
        }
      return () => fetchController.abort();
    }
    },
    [props.uri]
  );
  return (
    <SvgXml xml={xml} override={props} />
  )
}

export default SvgUriCustom;