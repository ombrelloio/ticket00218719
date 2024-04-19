import React from 'react';
import { LinkField, Text, TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { NavigationList } from 'src/components/NavigationList';

type NavigationFields = {
  fields: {
    Title: TextField;
    Link: LinkField;
  };
  items: NavigationFields[];
};

type NavigationRoot = {
  Title: TextField;
  items: NavigationFields[];
};

type NavigationRootProps = {
  params: { [key: string]: string };
  fields: NavigationRoot;
};

export const Default = (props: NavigationRootProps): JSX.Element => {
  const datasource = props.fields?.items;
  const styles = `component link-list ${props.params.styles}`.trimEnd();
  const id = props.params.RenderingIdentifier;

  if (datasource) {
    return (
      <div className={styles} id={id ? id : undefined}>
        <div className="component-content">
          <Text tag="h3" field={props.fields?.Title} />
          <ul>
            <NavigationList {...props.fields} params={props.params} />
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className={styles} id={id ? id : undefined}>
      <div className="component-content">
        <h3>Navigation Demo</h3>
      </div>
    </div>
  );
};
