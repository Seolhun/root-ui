import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Button } from '@/components';


describe('Button Test', () => {
  test('Button', () => {
    let button = render(<Button>Button</Button>);
    const { container } = button;

    expect(button.getByText('Button'));
    expect(container.classList.contains('Root__Button'));
  });

  test('Button: Intent', () => {
    let button = render(<Button>Button</Button>);
    expect(button.container.getElementsByClassName('bg-primary-500').length).toBe(1);
    button = render(<Button intent='success'>Button</Button>);
    expect(button.container.getElementsByClassName('bg-success-500').length).toBe(1);
  });

  test('Button: Intent Weight', () => {
    let button = render(<Button>Button</Button>);
    expect(button.container.getElementsByClassName('bg-primary-500').length).toBe(1);
    button = render(<Button intentWeight={200}>Button</Button>);
    expect(button.container.getElementsByClassName('bg-primary-200').length).toBe(1);

  });

  test('Button: Hover', () => {
    let button = render(<Button>Button</Button>);
    fireEvent.mouseOver(button.container);
    expect(button.container.getElementsByClassName('hover:bg-primary-400').length).toBe(1);

    button = render(<Button intentWeight={200}>Button</Button>);
    fireEvent.mouseOver(button.container);
    expect(button.container.getElementsByClassName('hover:bg-primary-100').length).toBe(1);
  });
});
