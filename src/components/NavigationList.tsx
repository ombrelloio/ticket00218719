import React from 'react';
import { Link as JssLink, LinkField, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

type NavigationFields = {
  fields: {
    Title: TextField;
    Link: LinkField;
  };
  items: NavigationFields[];
};

type NavigationFieldsRoot = {
  params: { [key: string]: string };
  items: NavigationFields[];
};

type LinkListItemProps = {
  key: string;
  index: number;
  total: number;
  field: LinkField;
  items: NavigationFields[];
};

const LinkListItem = (props: LinkListItemProps) => {
  let className = `item${props.index}`;
  className += (props.index + 1) % 2 == 0 ? ' even' : ' odd';
  if (props.index == 0) {
    className += ' first';
  }
  if (props.index + 1 == props.total) {
    className += ' last';
  }

  const subList = props.items
    .filter((element: NavigationFields) => element?.fields?.Link)
    .map((element: NavigationFields, key: number) => (
      <LinkListItem
        index={key}
        key={`${key}${element.fields.Link}`}
        total={props.items.length}
        field={element.fields.Link}
        items={element.items}
      />
    ));
  return (
    <li className={className}>
      <div className="field-link">
        <JssLink field={props.field} />
        <ul>{subList}</ul>
      </div>
    </li>
  );
};

export const NavigationList = (props: NavigationFieldsRoot): JSX.Element => {
  const datasource = props.items;
  const styles = `component link-list ${props.params.styles}`.trimEnd();
  const id = props.params.RenderingIdentifier;

  if (datasource) {
    const list = datasource
      .filter((element: NavigationFields) => element?.fields?.Link)
      .map((element: NavigationFields, key: number) => (
        <LinkListItem
          index={key}
          key={`${key}${element.fields.Link}`}
          total={datasource.length}
          field={element.fields.Link}
          items={element.items}
        />
      ));

    return (
      <div className={styles} id={id ? id : undefined}>
        <div className="component-content">
          <ul>{list}</ul>
        </div>
      </div>
    );
  }

  return (
    <div className={styles} id={id ? id : undefined}>
      <div className="component-content">
        <h3>Navigation List</h3>
      </div>
    </div>
  );
};
