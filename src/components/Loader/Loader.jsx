import React from "react";
import { Waveform } from '@uiball/loaders'

function Loader(props) {
  const colorLoader = props.color || "Pink";

  return (
    <>
<Waveform  size={100}  lineWeight={20} speed={2}  color={colorLoader} />
    </>
  );
}

export default Loader;
