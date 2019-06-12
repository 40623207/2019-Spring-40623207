var tipuesearch = {"pages":[{"title":"About","text":"CMSimfly 內容管理網誌 課程倉儲: https://github.com/chiamingyen/cmsimfly 內容管理: https://chiamingyen.github.io/cmsimfly/ 課程投影片: https://chiamingyen.github.io/cmsimfly/reveal 課程網誌: https://chiamingyen.github.io/cmsimfly/blog","tags":"misc","url":"https://mdekmol.github.io/cd2019b-task1-2019cdb_t1_g3_1/blog/pages/about/"},{"title":"Week9","text":"期中考 期中考週： 1.學員期中報告影片錄製。 2.影片標題與說明。 3.學員填寫自評表單。 4.個人期中報告影片嵌入網頁。 5.學員口頭期中報告。","tags":"Python","url":"https://mdekmol.github.io/cd2019b-task1-2019cdb_t1_g3_1/blog/cd2019b-task1-2019cdb-t1-g3-1/0419.html"},{"title":"Week8","text":"v-rep @v-rep模擬 @網誌維護出現錯誤，並修正 @說明協同產品設計流程的教育目標","tags":"Python","url":"https://mdekmol.github.io/cd2019b-task1-2019cdb_t1_g3_1/blog/cd2019b-task1-2019cdb-t1-g3-1/0412.html"},{"title":"Week7","text":"清明連假","tags":"Python","url":"https://mdekmol.github.io/cd2019b-task1-2019cdb_t1_g3_1/blog/cd2019b-task1-2019cdb-t1-g3-1/0405.html"},{"title":"Week6","text":"V-rep BubbleRob onshape草圖 V-rep BubbleRob 1.完成上周未完成進度 2.完成後的模擬結果 onshape 草圖完成 1.草圖 2.針對手足球桿子及取球區的部分修改 3.取球區功能完整化，且在守門員旁增加彈簧，以防止撞擊","tags":"Python","url":"https://mdekmol.github.io/cd2019b-task1-2019cdb_t1_g3_1/blog/cd2019b-task1-2019cdb-t1-g3-1/0329.html"},{"title":"Week5","text":"V-rep BubbleRob V-rep BubbleRob 模擬 Add a primitive sphere of diameter 0.2 to the scene with [Menu bar --> Add --> Primitive shape --> Sphere]. 使用[菜單欄(Menu bar) - >添加(Add) - >原始形狀(Primitive shape) - >球體(Sphere)]向場景添加直徑為0.2的球體。 We adjust the X-size item to 0.2, then click OK. 將X-size項目調整為0.2，然後點擊\"OK\"。 The created sphere will appear in the visibility layer 1 by default, and be dynamic and respondable 默認情況下，創建的球體將顯示在可見性圖層1中，並且是動態且可響應的 This means that BubbleRob's body will be falling and able to react to collisions with other respondable shapes(i.e. simulated by the physics engine). 這意味著BubbleRob的身體將會下降，並能夠對與其他可響應形狀的碰撞作出反應（即由物理引擎模擬） Enable Collidable, Measurable, Renderable and Detectable in the object common properties for that shape 在該形狀的公共屬性中啟用Collidable，Measurable，Renderable和Detectable open the position dialog on the translation tab, select the sphere representing BubbleRob's body, and enter 0.02 for Along Z. 在平移選項卡上打開位置對話框，選擇代表BubbleRob主體的球體，並在Along Z輸入0.02。 We make sure that the Relative to-item is set to World. Then we click Translate selection. 我們確保將相對項目設置為世界。 然後我們點擊改動選擇。 Add a proximity sensor [Menu bar --> Add --> Proximity sensor --> Cone type] 添加接近傳感器[菜單欄 - >添加 - >接近傳感器 - >錐形] In the orientation dialog on the orientation tab, we enter 90 for Around Y and for Around Z, then click Rotate selection 在方向選項卡上的方向對話框中，我們為Y和Z輸入90，然後點擊旋轉 In the position dialog, on the position tab, we enter 0.1 for X-coord. and 0.12 for Z-coord. 在位置對話框中，在平移選項卡上，我們為X-coord輸入0.1。 Z-coord為0.12。 Click Show volume parameter adjust items Offset to 0.005, Angle to 30 and Range to 0.15. 單擊顯示體積參數調整項目偏移量為0.005，角度為30，範圍為0.15。 Click Show detection parameters uncheck item Don't allow detections if distance smaller than. 單擊顯示檢測參數取消選中項目如果距離小於，則不允許檢測。 Add a pure primitive cylinder with dimensions,size(0.08,0.08,0.02). 添加尺寸，尺寸（0.08,0.08,0.02）的純原始圓柱體。 Set the cylinder's absolute position to (0.05,0.1,0.04).Set absolute orientation to (-90,0,0). 將氣缸的絕對位置設為（0.05,0.1,0.04），將絕對方向設置為（-90,0,0）。 Copy and paste the wheel, and set the absolute Y coordinate of the copy to -0.1. 複製並貼上滾輪，並將副本的絕對Y坐標設置為-0.1。 Add joints (or motors) for the wheels. Click [Menu bar --> Add --> Joint --> Revolute] 為車輪添加接頭（或馬達）。 單擊[菜單欄 - >添加 - >關節 - > Revolute] On the position tab, click the Apply to selection button. 在位置選項卡上，單擊\"應用於選擇\"按鈕 On the orientation tab, click the Apply to selection button. 在方向選項卡上，單擊\"應用於選擇\"按鈕 Attach the left wheel to the left motor ,and attach motor to BubbleRob.Attach the right wheel to the right motor ,and attach motor to BubbleRob. 將左側車輪連接到左側電機，並將電機連接到BubbleRob。將右側車輪安裝到右側電機，然後將電機連接到BubbleRob。 Click Show dynamic parameters to open the joint dynamics properties dialog. We enable the motor, and check item Lock motor when target velocity is zero. 單擊顯示動態參數以打開關節動力學屬性對話框。 啟用馬達，並在目標速度為零時檢查項目鎖定馬達。 Add a pure primitive sphere with diameter 0.05 and make the sphere Collidable, Measurable, Renderable and Detectable. set absolute position to(-0.07,0,0). 添加直徑為0.05的純原始球體，使球體具有可碰撞，可測量，可表示和可檢測的範圍。 將絕對位置設置為（-0.07,0,0）。 Add a force sensor object with [Menu bar --> Add --> Force sensor]. set absolute position to(-0.07,0,0.05) 使用[菜單欄 - >添加 - >力傳感器]添加力傳感器對象。 將絕對位置設為（-0.07,0,0.05） Attach the slider to the force sensor 將滑塊連接到力傳感器 將bubbleRob的物體碰撞響應遮罩設置為00001111 bubbleRob_slider set the local respondable mask to 00001111 bubbleRob set the local respondable mask to 11110000 將滑塊的物體碰撞響應遮罩設置為11110000 select the two wheels and the slider, and in the shape dynamics dialog we click three times M=M*2 . 選擇兩個輪子和滑塊，在形狀動態對話框中我們單擊三次M = M * 2。 Enabled Collidable, Measurable, Renderable and Detectable. 啟用可碰撞，可測量，可表示和可檢測。 Click Add new collection.Select bubbleRob and then click Add in the collection dialog. 單擊\"添加新集合\"選擇bubbleRob，然後在集合對話框中單擊\"添加\"。 Click Add new distance object in distance dialog.Select a distance pair: [collection] collection - all other measurable objects in the scene. 單擊距離對話框中的添加新距離目標。選擇距離配對：[集合]集合 - 場景中的所有其他可測量對象。 Add a graph object Click [Menu bar --> Add --> Graph].Attach the graph to bubbleRob, and set the absolute coordinates to (0,0,0.005). 添加圖形對象單擊[菜單欄 - >添加 - >圖形]。 將圖形附加到bubbleRob，並將絕對坐標設置為（0,0,0.005）。 uncheck Display XYZ-planes.Click Add new data stream to record 取消選中顯示XYZ平面。單擊\"添加要記錄的新數據流\" select Object: absolute x-position for the Data stream type, and graph for the Object / item to record. Record the y and z positions. 選擇對象：數據流類型的絕對x位置，以及要記錄的對象/項目的圖形。 記錄y和z位置。 select Distance: segment length for the Data stream type, and bubbleRob_distance for the Object / item to record. 選擇距離：數據流類型的段長度，以及要記錄的對象/項目的bubbleRob_distance。 Set x y z postion uncheck Visible. 設置x y z postion取消選中Visible。 Click Edit 3D curves, then click Add new curve. bubbleRob_x_pos for the X-value item bubbleRob_y_pos for the Y-value item bubbleRob_z_pos for the Z-value item 單擊\"編輯3D曲線\"，然後單擊\"添加新曲線\"。 bubble值為bubbleRob_x_pos，用於X值項目 bubble值為bubbleRob_y_pos，用於Y值項目 bubble值為bubbleRob_z_pos，用於Z值項目 check the Relative to world item and set Curve width to 4. 選中\"相對於世界\"項並將\"曲線寬度\"設置為4。 Add a pure primitive cylinder:(0.1, 0.1, 0.2). 添加一個純原始圓柱體：（0.1,0.1,0.2）。 Disable Body is dynamic.Enable Collidable, Measurable, Renderable and Detectable. 取消勾選圓柱體是動態的。啟用可碰撞，可測量，可表示和可檢測。 Copy and paste the cylinder a few times, and move them to positions around BubbleRob. 複製並貼上圓柱體幾次，然後將它們移動到BubbleRob周圍的位置。 Select the model base (BubbleRob) then check items Object is model base and Object/model can transfer or accept DNA. 選擇模型庫（BubbleRob）然後檢查項目對像是模型庫，對象/模型可以傳輸或接受DNA。 Select the two joints, the proximity sensor and the graph, then enable item Igonred by model bounding box and click Apply to selection. 選擇兩個關節，接近傳感器和圖形，然後通過模型邊界框啟用項目Igonred，然後點擊應用於選擇。 Select the vision sensor, the two wheels, the slider, and the graph, then enable item Select base of model instead. 選擇視覺傳感器，兩個輪子，滑塊和圖形，然後啟用項目選擇模型基礎。 Add a vision sensor,click [Menu bar --> Add --> Vision sensor --> Perspective type] At the same position and orientation as BubbleRob's proximity sensor,then attach the vision sensor to the proximity sensor. 添加視覺傳感器，單擊[菜單欄 - >添加 - >視覺傳感器 - >透視類型]在與BubbleRob的接近傳感器相同的位置和方向，然後將視覺傳感器連接到接近傳感器。 Set the local position and orientation of the vision sensor to (0,0,0). Set the Far clipping plane item to 1, and the Resolution x and Resolution y items to 256 and 256. 將視覺傳感器的本地位置和方向設置為（0,0,0）。將遠剪裁平面項目設置為1，將分辨率x和分辨率y項目設置為256和256。 Clicking Show filter dialog. We select the filter component Edge detection on work image and click Add filter. We position the newly added filter in second position (one position up, using the up button). 單擊\"顯示過濾器\"對話框 我們在工作圖像上選擇過濾器組件邊緣檢測，然後單擊添加過濾器。 將新添加的過濾器定位在第二個位置（一個位置向上，使用向上按鈕）。 Double-click the newly added filter component and adjust its Threshold item to 0.2. 雙擊新添加的過濾器組件，並將其臨界調整為0.2。 Add a floating view.Right-click [Popup menu --> View --> Associate view with selected vision sensor]. 添加浮動視圖。右鍵點擊[彈出菜單 - >視圖 - >關聯視圖與選定的視覺傳感器]。 Select bubbleRob and click [Menu bar --> Add --> Associated child script --> Non threaded]. 選擇bubbleRob並點擊[菜單欄 - >添加 - >關聯的子腳本 - >非線程]。 copy and paste following code into the script editor 將代碼複製並貼到腳本編輯器中 function speedChange_callback ( ui , id , newVal ) speed = minMaxSpeed [ 1 ] + ( minMaxSpeed [ 2 ] - minMaxSpeed [ 1 ]) * newVal / 100 end function sysCall_init () -- This is executed exactly once , the first time this script is executed bubbleRobBase = sim . getObjectAssociatedWithScript ( sim . handle_self ) -- this is bubbleRob 's handle leftMotor=sim.getObjectHandle(\"bubbleRob_leftMotor\") -- Handle of the left motor rightMotor=sim.getObjectHandle(\"bubbleRob_rightMotor\") -- Handle of the right motor noseSensor=sim.getObjectHandle(\"bubbleRob_sensingNose\") -- Handle of the proximity sensor minMaxSpeed={50*math.pi/180,300*math.pi/180} -- Min and max speeds for each motor backUntilTime=-1 -- Tells whether bubbleRob is in forward or backward mode -- Create the custom UI: xml = ' < ui title = \"'..sim.getObjectName(bubbleRobBase)..' speed\" closeable = \"false\" resizeable = \"false\" activate = \"false\" > ' ..[[ < hslider minimum = \"0\" maximum = \"100\" onchange = \"speedChange_callback\" id = \"1\" /> < label text = \"\" style = \"* {margin-left: 300px;}\" /> < /ui> ]] ui = simUI . create ( xml ) speed = ( minMaxSpeed [ 1 ] + minMaxSpeed [ 2 ]) * 0.5 simUI . setSliderValue ( ui , 1 , 100 * ( speed - minMaxSpeed [ 1 ]) / ( minMaxSpeed [ 2 ] - minMaxSpeed [ 1 ])) end function sysCall_actuation () result = sim . readProximitySensor ( noseSensor ) -- Read the proximity sensor -- If we detected something , we set the backward mode : if ( result > 0 ) then backUntilTime = sim . getSimulationTime () + 4 end if ( backUntilTime < sim . getSimulationTime ()) then -- When in forward mode , we simply move forward at the desired speed sim . setJointTargetVelocity ( leftMotor , speed ) sim . setJointTargetVelocity ( rightMotor , speed ) else -- When in backward mode , we simply backup in a curve at reduced speed sim . setJointTargetVelocity ( leftMotor , - speed / 2 ) sim . setJointTargetVelocity ( rightMotor , - speed / 8 ) end end function sysCall_cleanup () simUI . destroy ( ui ) end 參考文章","tags":"Python","url":"https://mdekmol.github.io/cd2019b-task1-2019cdb_t1_g3_1/blog/cd2019b-task1-2019cdb-t1-g3-1/0322.html"},{"title":"Week4","text":"配置 ungit 下載 ungit 與 node.js 程式碼 根據 https://2019wcm.blogspot.com/search/label/ungit 完成ungit的配置 1.下載 kmol-2019.7z , nodejs-with-ungit.7z 2.兩者分別解開壓縮檔案, 然後將 nodejs 放入 kmol_2019 的 data 目錄中 3.設定啟動 start.bat 中的 ungit 命列列搜尋路徑: set path8=%Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm; 4.將 path8 納入 path 設定: path=%path%;%path1%;%path2%;%path3%;%path4%;%path5%;%path6%;%path7%;%Disk%:\\p37\\site-packages\\scipy\\extra_dll;%Disk%:\\scite\\bin;%path8%; 5.為了讓 node.js 能夠使用 y:\\home 作為使用者目錄, 在 start.bat 中加入 set USERPROFILE=%Disk%:\\home 6.設定 kungit 7.將檔案存放於Y:後，於cmd上執行","tags":"Python","url":"https://mdekmol.github.io/cd2019b-task1-2019cdb_t1_g3_1/blog/cd2019b-task1-2019cdb-t1-g3-1/0315.html"}]};