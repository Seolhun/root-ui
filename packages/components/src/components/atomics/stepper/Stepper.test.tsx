import { render } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, test } from 'vitest';

import { Stepper } from './Stepper'; // Adjust the import according to your project structure

describe('Stepper Component', () => {
  test('renders the Stepper component as a list', () => {
    const { container } = render(
      <Stepper>
        <Stepper.Item name="Step 1" step="1" />
        <Stepper.Item name="Step 2" step="2" />
      </Stepper>,
    );
    expect(container.querySelector('ul')).toBeTruthy();
    expect(container.querySelectorAll('li').length).toBe(2);
  });

  test('renders the StepperItem component with default styles', () => {
    const { getByText } = render(
      <Stepper>
        <Stepper.Item name="Step 1" step="1" />
      </Stepper>,
    );

    const stepBadge = getByText('1');
    expect(stepBadge.classList.contains('bg-neutral-3')).toBe(true);
  });

  test('renders the StepperItem component with active styles', () => {
    const { getByText } = render(
      <Stepper>
        <Stepper.Item active name="Step 1" step="1" />
      </Stepper>,
    );

    const stepBadge = getByText('1');
    expect(stepBadge).toBeTruthy();
    expect(stepBadge.classList.contains('bg-primary')).toBe(true);
  });

  test('renders the correct step name and content', () => {
    const { getByText } = render(
      <Stepper>
        <Stepper.Item name="Step 1" step="1">
          Step 1 content
        </Stepper.Item>
      </Stepper>,
    );

    expect(getByText('Step 1')).toBeTruthy();
    expect(getByText('Step 1 content')).toBeTruthy();
  });

  test('renders multiple steps', () => {
    const { container, getByText } = render(
      <Stepper>
        <Stepper.Item name="Step 1" step="1" />
        <Stepper.Item name="Step 2" step="2" />
        <Stepper.Item name="Step 3" step="3" />
      </Stepper>,
    );

    expect(container.querySelectorAll('li').length).toBe(3);
    expect(getByText('Step 1')).toBeTruthy();
    expect(getByText('Step 2')).toBeTruthy();
    expect(getByText('Step 3')).toBeTruthy();
  });
});
