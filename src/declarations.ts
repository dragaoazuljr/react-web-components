import { DOMAttributes }  from 'react';

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['ng-child']: CustomElement<any>;
      ['react-child']: CustomElement<any>;
    }
  }
}