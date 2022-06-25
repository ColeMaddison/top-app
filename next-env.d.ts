/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
import React from 'react';
declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    export default content;
}