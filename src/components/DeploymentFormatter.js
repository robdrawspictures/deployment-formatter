import React from "react";
import CopyText from "../helpers/CopyText";

function DeploymentFormatter(params) {

    const parArr = params.split(',').map(item => item.trim());

    const ticket = parArr[0];
    const version = parArr[1];
    const sprint = parArr[2];
    const build = parArr[3];
    const dev = parArr[4];
    const branch = parArr[5];


    if(parArr.length !== 6){
        return (
			<div
				className="ds_error-summary"
				id="error-summary"
				aria-labelledby="error-summary-title"
				role="alert"
			>
				<h2 className="ds_error-summary__title" id="error-summary-title">
					There is a problem
				</h2>

                <p>Incorrect number of parameters received. Please ensure you entered all required information and try again.</p>
			</div>
		);
    }

    return (
		<>
			<div className="formatted-list" id="formatted-list">
				<p className="formatted-list-item">{`DP v${version} (Sprint ${sprint} / Build ${build})`}</p>
				<p className="formatted-list-item">{`DP_v${version}_build${build}`}</p>
				<p className="formatted-list-item">{`dev${dev}`}</p>
				<p className="formatted-list-item">{`DP v${version} (Sprint ${sprint} / Build ${build}) - ${branch}`}</p>
				<p className="formatted-list-item">{`feature/DP-${ticket}-Sprint${sprint}-Build${build}`}</p>
				<p className="formatted-list-item">{`feat: DP-${ticket} Sprint${sprint} Build${build}`}</p>
			</div>
            <button onClick={() => CopyText()}>Copy to clipboard</button>
		</>
	);
}

export default DeploymentFormatter;
