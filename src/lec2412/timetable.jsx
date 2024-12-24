import * as React from "react";

class Timetable extends React.Component {
  render() {
    return (
      <div>
        <h1>Time-Table</h1>
        <table border="1" style={{  textAlign: "center" }}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>08:00 to 8:55</td>
              <td>React (NV)</td>
              <td>AI/ML (CP)</td>
              <td>AI/ML (CP)</td>
              <td>React (SMS)</td>
              <td>TOC (AKK)</td>
            </tr>
            <tr>
              <td>8:55 to 9:45</td>
              <td>React (NV)</td>
              <td>TOC (AKK)</td>
              <td>AI/ML (CP)</td>
              <td>React (SMS)</td>
              <td>TOC (AKK)</td>
            </tr>
            <tr>
              <td>Class / Lab location</td>
              <td>LL1</td>
              <td>LL6</td>
              <td>LL1</td>
              <td>LL1</td>
              <td>201</td>
            </tr>
            <tr>
              <td>9:45 TO 10:00</td>
              <td colSpan="5">TEA BREAK</td>
            </tr>
            <tr>
              <td>10:00 TO 10:50</td>
              <td>.NET (PJT) / ADV. JAVA (NC)</td>
              <td>.NET (BD) / ADV. JAVA (NC)</td>
              <td>PD (DS) / DM (Lib) / EC (Lib)</td>
              <td>PD (DS) / DM (Lib) / EC (Lib)</td>
              <td>.NET (BD) / ADV. JAVA (Lib)</td>
            </tr>
            <tr>
              <td>10:50 TO 11:40</td>
              <td>.NET (PJT) / ADV. JAVA (NC)</td>
              <td>.NET (BD) / ADV. JAVA (NC)</td>
              <td>PD (DS) / DM (Lib) / EC (Lib)</td>
              <td>PD (DS) / DM (Lib) / EC (Lib)</td>
              <td>.NET (BD) / ADV. JAVA (Lib)</td>
            </tr>
            <tr>
              <td>Class / Lab location</td>
              <td>LL1 / LL5</td>
              <td>LL1 / LL5</td>
              <td>118</td>
              <td>118</td>
              <td>LL4</td>
            </tr>
            <tr>
              <td>11:40 TO 12:30</td>
              <td colSpan="5">LUNCH BREAK</td>
            </tr>
            <tr>
              <td>12:30 TO 1:20</td>
              <td>PD (Lib) / DM (OD) / EC (RKI)</td>
              <td>PD (Lib) / DM (OD) / EC (RKI)</td>
              <td>React (NV)</td>
              <td>AI/ML (CP)</td>
              <td>ADV. JAVA (MV) / .NET (Lib)</td>
            </tr>
            <tr>
              <td>1:20 TO 2:10</td>
              <td>Class / Lab location</td>
              <td>214 / Elec. Machine Lab</td>
              <td>LL5</td>
              <td>LL5</td>
              <td>LL5</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Timetable;
