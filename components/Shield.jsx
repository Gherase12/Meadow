import React from 'react'

function Shield({color, w, h}) {
  return (
    <svg width={w} height={h} viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8709 26.6598L13.5318 27.0167L14.1937 26.6615L14.2127 26.6513L14.2159 26.6495L14.2271 26.6435C15.4704 25.9719 18.5969 24.2833 21.2332 21.0034C23.9076 17.6762 26.0258 12.7768 25.329 5.81924L25.2623 5.15325L24.7011 4.78849C24.0109 4.33987 22.2228 3.55526 20.2087 2.89431C18.174 2.22662 15.6705 1.60485 13.5339 1.60483H13.5338C11.3971 1.60485 8.89366 2.22663 6.85904 2.89431C4.8449 3.55527 3.05692 4.33987 2.36671 4.78849L1.80552 5.15325L1.73882 5.81924C1.04199 12.7768 3.16023 17.6762 5.83462 21.0034C8.47092 24.2833 11.5973 25.9719 12.8407 26.6435L12.8519 26.6495L12.852 26.6496L12.8709 26.6598Z" fill="#D9D9D9" stroke="white" stroke-width="2.79034"/>
<path d="M13.2024 26.046L13.5328 26.2244L13.8638 26.0468L13.8828 26.0366L13.8844 26.0358L13.8901 26.0326C15.1153 25.3709 18.1415 23.7364 20.6895 20.5664C23.2565 17.3727 25.3123 12.653 24.6349 5.88876L24.6015 5.55576L24.3209 5.37338C23.7099 4.97625 21.9935 4.21417 19.9912 3.55712C17.9787 2.8967 15.559 2.30244 13.5338 2.30241H13.5338C11.5087 2.30244 9.08903 2.8967 7.07654 3.55712C5.0743 4.21417 3.35787 4.97625 2.74688 5.37338L2.46628 5.55576L2.43293 5.88876C1.75546 12.653 3.81128 17.3727 6.37833 20.5664C8.92633 23.7364 11.9525 25.3709 13.1777 26.0326L13.1834 26.0358L13.1835 26.0358L13.2024 26.046Z" fill="#D9D9D9" stroke="black" stroke-width="1.39517"/>
<mask id="mask0_650_4987" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="22" height="23">
<path d="M13.5338 25.4322L13.515 25.422C11.1007 24.1179 1.81081 19.1002 3.12704 5.95827C4.19058 5.267 9.7066 3.00004 13.5338 3C17.3611 3.00004 22.8772 5.267 23.9407 5.95827C25.257 19.1002 15.9671 24.1179 13.5528 25.422L13.5338 25.4322Z" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_650_4987)">
<g filter="url(#filter0_ii_650_4987)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.534 25.4322L13.5149 25.422C11.1007 24.1179 1.81082 19.1002 3.12704 5.95827C4.19059 5.267 9.70671 3 13.534 3V25.4322ZM13.5344 25.4322L13.5534 25.422C15.9677 24.1179 25.2575 19.1002 23.9413 5.95827C22.8778 5.267 17.3616 3 13.5344 3V25.4322Z" fill={color}/>
</g>
<path d="M17.5164 7.66065L17.7001 9.63874L19.3213 10.7869L17.3432 10.9706L16.1951 12.5918L16.0113 10.6137L14.3901 9.46559L16.3682 9.28187L17.5164 7.66065Z" fill="white"/>
</g>
<defs>
<filter id="filter0_ii_650_4987" x="0.209657" y="1.60483" width="25.2539" height="25.9201" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1.39517" dy="-1.39517"/>
<feGaussianBlur stdDeviation="4.8831"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.866667 0 0 0 0 0.474211 0 0 0 0 0.111944 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_650_4987"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-2.79034" dy="2.09276"/>
<feGaussianBlur stdDeviation="1.39517"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.991583 0 0 0 0 1 0 0 0 0 0.579167 0 0 0 0.66 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_650_4987" result="effect2_innerShadow_650_4987"/>
</filter>
</defs>
</svg>

  )
}

export default Shield