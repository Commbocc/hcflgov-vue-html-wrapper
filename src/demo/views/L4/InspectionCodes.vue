<template lang="html">
  <div>

    <h3>Using inspection codes to schedule an inspection</h3>

    <p>
      In order to use the Interactive Voice Response System (IVRS) phone system to schedule an inspection, you must have:
    </p>

    <ul>
      <li>
        your permit number
      </li>
      <li>
        the inspection code (found below)
      </li>
      <li>
        a certified recorded copy of the Notice of Commencement (NOC) returned to permitting
      </li>
    </ul>

    <p>
      Check out our Schedule and Inspection page for instructions on how to request an inspection by IVRS or through the online permitting system (registered users only).
    </p>

    <ul is="hc-accordion" multiple class="mb-3">
      <li v-for="(table, i) in tables" is="hc-accordion-item" flush :key="i">
        <span slot="header">{{ table }}</span>

        <div class="table-responsive">
          <table class="table table-striped table-sm mb-0">
            <thead>
              <tr>
                <th width="25%">Code</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  102
                </td>
                <td>Footing</td>
              </tr>
              <tr>
                <td>103</td>
                <td>Monolithic Slab</td>
              </tr>
              <tr>
                <td>105</td>
                <td>Slab</td>
              </tr>
              <tr>
                <td>107</td>
                <td>Stem Wall</td>
              </tr>
              <tr>
                <td>110</td>
                <td>Bond Beam/Lintel</td>
              </tr>
              <tr>
                <td>112</td>
                <td>Second Floor Lintel</td>
              </tr>
              <tr>
                <td>115</td>
                <td>Roof Sheathing</td>
              </tr>
              <tr>
                <td>117</td>
                <td>Wall Sheathing</td>
              </tr>
              <tr>
                <td>120</td>
                <td>Framing</td>
              </tr>
              <tr>
                <td>121 </td>
                <td>Aluminum Track</td>
              </tr>
              <tr>
                <td>122</td>
                <td>Pre-siding Dry-in/Wire Lath</td>
              </tr>
              <tr>
                <td>123</td>
                <td>Fire Rated Assembly</td>
              </tr>
              <tr>
                <td>125</td>
                <td>Special Inspections (Please leave message.)</td>
              </tr>
              <tr>
                <td>160</td>
                <td>Insulation</td>
              </tr>
              <tr>
                <td>198</td>
                <td>Roof Final</td>
              </tr>
              <tr>
                <td>199</td>
                <td>Building Final</td>
              </tr>
            </tbody>
          </table>
        </div>

      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data: () => ({
    tables: [
      'Building Inspections',
      'Retaining Wall Inspections',
      'Mobile Home Inspections',
      'Electrical Inspections',
      'Mechanical Inspections',
      'Plumbing Inspections',
      'Natural/LP Gas Inspections',
      'Swimming Pool Inspections',
      'Pool Enclosure Inspections',
      'Re-Roofing Inspections',
      'Landscaping/Lot Grading Inspections'
    ]
  })
}
</script>
