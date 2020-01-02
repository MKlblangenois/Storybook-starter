import { addDecorator, configure, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import mediakodTheme from './theme';

addParameters({
    options: {
        theme: mediakodTheme,
        showRoots: true,
    },
});

// automatically import all files ending in *.stories.js
configure(
    [
        require.context('../src', true, /\.stories\.mdx$/),
        require.context('../src', true, /\.stories\.js$/),
    ],
    module
);