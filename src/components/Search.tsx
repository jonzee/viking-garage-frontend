import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */

interface Props {}

interface State {}

export default class AutoCompleteExampleSimple extends Component<Props, State> {
	state = {
		dataSource: [],
	};

	handleUpdateInput = (value) => {
		this.setState({
			dataSource: [
				'motocross1',
				'motocross2',
				'motocross3',
				'motocross4',
				value,
			],
		});
	};

	public render() {
		return (
				<AutoComplete
					hintText="Type motocross"
					dataSource={this.state.dataSource}
					onUpdateInput={this.handleUpdateInput}
					floatingLabelText="Full width"
					fullWidth={true}
				/>
		);
	}
}