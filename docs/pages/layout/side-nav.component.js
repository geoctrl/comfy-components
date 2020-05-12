import React, { Component } from 'react';
import { Scoped, k } from 'kremling';
import { Icon } from '../../../src';

export class SideNav extends Component {
  render() {
    return (
      <Scoped css={css}>
        <div className="side-nav">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M47.476 40.976A23.5 6.5 0 1 0 47.476 53.976A23.5 6.5 0 1 0 47.476 40.976Z"/><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M47.141,53.738c-12.389,0-22.542-2.775-23.52-5.443c-0.051,0.678-0.084,1.361-0.084,2.052c0,13.939,10.568,25.239,23.604,25.239s23.604-11.3,23.604-25.239c0-0.692-0.033-1.375-0.084-2.052C69.683,50.964,59.53,53.738,47.141,53.738z"/><path d="M71.697,49.067c2.821-2.409,8.025-5.387,10.713-1.223c2.111,3.271-1.952,5.856-4.142,7.502c-2.65,1.991-5.381,3.875-8.09,5.785c-1.726,1.217-3.726,2.377-5.205,3.906c-0.895,0.925,0.517,2.341,1.414,1.414c2.322-2.4,5.609-4.153,8.32-6.071c2.867-2.029,6.305-4.033,8.651-6.692c2.865-3.247,1.537-7.544-2.12-9.438c-3.608-1.868-8.257,1.099-10.954,3.403C69.302,48.49,70.723,49.899,71.697,49.067L71.697,49.067z" fill="#000000"/><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M58.539,73.209c0.878,0.513,1.374,1.094,1.374,1.709c0,2.071-5.605,4.725-12.52,4.725s-12.52-2.654-12.52-4.725c0-0.615,0.494-1.195,1.37-1.707"/><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M33.124 45.664c3.795-.709 8.742-1.138 14.153-1.138 11.953 0 21.643 2.093 21.643 4.676M30.659 46.205c.22-.057.214-.058.447-.113M25.633 49.201c0-.891 1.152-1.723 3.152-2.431"/></svg>

          <Icon name="times" size={100} />
          side nav
        </div>
      </Scoped>
    );
  }
}

const css = k`
  .side-nav {
    width: 280rem;
    flex-shrink: 0;
    flex-grow: 0;
  }
`;