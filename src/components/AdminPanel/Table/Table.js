import React from 'react';

import { Link } from '../../Link/Link';

export default function Table({ data, fields, path, editable, links }) {
  const DEFAULT_PATH = '/users';

  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            {Object.entries(fields).map(([, { label }]) => {
              // eslint-disable-next-line react/jsx-key
              return <th>{label}</th>;
            })}
            {links && (
              <React.Fragment>
                <th />
                <th />
              </React.Fragment>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((element) => {
            if (path === '/') path = DEFAULT_PATH;
            return (
              <tr key={element.id}>
                {Object.entries(fields).map(([fieldName, { content }]) => {
                  const FieldComponent = content;
                  // eslint-disable-next-line react/jsx-key
                  return <FieldComponent value={element[fieldName]} />;
                })}
                {links && (
                  <React.Fragment>
                    <td>
                      <Link href={`${path}/${element.id}`}>Ver</Link>
                    </td>
                    {editable && (
                      <td>
                        <Link href={`${path}/${element.id}/edit`}>Editar</Link>
                      </td>
                    )}
                  </React.Fragment>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}
