import React, { useRef } from 'react';

function TableRow({ piece, index, onTableRowClick }) {
  const tr = useRef(null);

  const onRowClick = () => {
    const { previousSibling, nextSibling } = tr.current.parentNode;
    const payload = {
      genre: previousSibling.innerHTML,
      artist: tr.current.innerHTML,
      piece: nextSibling.innerHTML
    };
    onTableRowClick(payload);
  };

  return (
    <tr onClick={onRowClick}>
      <th scope="row">{index + 1}</th>
      <td>{piece.genre.name}</td>
      <td>
        <div ref={tr}>
          {piece.artist.name}
        </div>
      </td>
      <td>{piece.title}</td>
      <td>{piece.type}</td>
      <td>{piece.hasVideoId ? 'true' : 'false'}</td>
      <td>{piece.noRelevantId ? 'true' : 'false'}</td>
    </tr>
  );
}

export default TableRow;
