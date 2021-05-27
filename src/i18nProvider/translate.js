import React from 'react';
import { FormattedMessage } from 'react-intl';

const translate = (id, defaultMessage, value = {},) => (
  <FormattedMessage
    id={id}
    values={{ ...value }}
    defaultMessage={defaultMessage}
  />
);

export default translate;
