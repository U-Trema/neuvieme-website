import React, {FC} from 'react';
import {EmbedField} from "@prismicio/client";

type Props = {
  embed: EmbedField;
  className?: string;
};

export const Embed: FC<Props> = ({embed, className}) => {
  if (!embed.html) return null;

  return (
    <div className={className}>
      <div dangerouslySetInnerHTML={{__html: embed.html}} />
    </div>
  );
};