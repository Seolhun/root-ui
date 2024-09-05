import { render } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, test } from 'vitest';

import { Tag } from './Tag';

describe('Tag Test', () => {
  test('Tag', () => {
    const button = render(<Tag>Tag</Tag>);
    const { container } = button;

    expect(button.getByText('Tag'));
    expect(container.classList.contains('Root__Tag'));
  });

  test('Tag: Intent', () => {
    let button = render(<Tag>Tag</Tag>);
    expect(button.container.getElementsByClassName('bg-primary').length).toBe(1);

    button = render(<Tag intent="success">Tag</Tag>);
    expect(button.container.getElementsByClassName('bg-success').length).toBe(1);
  });
});
