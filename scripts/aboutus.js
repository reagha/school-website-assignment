

function renderVision(){
let visionHtml='';
const contents=document.querySelector('.contents');
visionHtml+=`
<div class="values-col">
  <h3>VISION</h3>
  <hr class="z">
  <p>To be a leading school in the country producing high quality citizens of high morals</p>
</div>
`;
contents.innerHTML=visionHtml;
}


function renderMotto(){
    let visionHtml='';
    const contents=document.querySelector('.contents');
    visionHtml+=`
    <div class="values-col">
  <h3>SCHOOL MOTTO</h3>
  <hr class="z">
  <p>Duc in Altum </p>
</div>
    `;
    contents.innerHTML=visionHtml;
    }

    function renderCore(){
        let visionHtml='';
        const contents=document.querySelector('.contents');
        visionHtml+=`
        <div class="values-col">
  <h3>CORE VALUES</h3>
<hr class="z">
  <P>Integrity, Responbile, Courage, God fearing</P>
</div>
        `;
        contents.innerHTML=visionHtml;
        }

        function renderMission(){
            let visionHtml='';
            const contents=document.querySelector('.contents');
            visionHtml+=`
            <div class="values-col">
            <h3>MISSION</h3>
            <hr>
            <p>To pursue execllency in holistic education with christian values
              bringing worth principled professinals for development of society
            </p>
          </div>
            `;
            contents.innerHTML=visionHtml;
            }