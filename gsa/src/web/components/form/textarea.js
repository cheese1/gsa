/* Copyright (C) 2016-2019 Greenbone Networks GmbH
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 */

import styled from 'styled-components';

import compose from 'web/utils/compose';
import Theme from 'web/utils/theme';

import withLayout from 'web/components/layout/withLayout';

import {DISABLED_OPACTIY} from './field';

import withChangeHandler from './withChangeHandler';

const StyledTextArea = styled.textarea`
  display: block;
  height: auto;
  color: ${Theme.darkGray};
  background-color: ${Theme.white};
  background-image: none;
  border: 1px solid ${Theme.inputBorderGray};
  border-radius: 2px;
  padding: 4px 8px;
  cursor: ${props => props.disabled ? 'not-allowed' : undefined};
  background-color: ${props => props.disabled ? Theme.dialogGray : undefined};
  opacity: ${props => props.disabled ? DISABLED_OPACTIY : undefined};
`;

export default compose(
  withLayout(),
  withChangeHandler(),
)(StyledTextArea);

// vim: set ts=2 sw=2 tw=80:
