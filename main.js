const electron = require('electron');
// ����Ӧ���������ڵ�ģ�顣
const app = electron.app
// ����ԭ����������ڵ�ģ�顣
const BrowserWindow = electron.BrowserWindow

// ����һ������ window �����ȫ�����ã�����㲻��������
// �� JavaScript �����������գ� window �ᱻ�Զ��عر�
let mainWindow

function createWindow() {
    // �������������
    mainWindow = new BrowserWindow({
        width: 495,
        height: 470,
        frame: false,  // û��Ĭ�Ͽ��
        transparent: true, // ����͸��
        alwaysOnTop: false, // ʼ������ǰ��
        skipTaskbar: false,  // ���������д���ͼ��
    });

    // // ����Ӧ�õ� index.html��
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // �򿪵��Թ���
    // mainWindow.webContents.openDevTools();

    // ���ڹر�ʱ�򴥷����¼�
    mainWindow.on('closed', function () {
        // ȡ������ window ����������Ӧ��֧�ֶര�ڵĻ���
        // ͨ����Ѷ�� window ��������һ���������棬
        // ���ͬʱ����Ӧ��ɾ����Ӧ��Ԫ�ء�
        mainWindow = null
    });
}

// Electron ���ڳ�ʼ����׼��
// �������������ʱ���������������
// ���� API �� ready �¼����������ʹ�á�
app.on('ready', createWindow)

// ��ȫ�����ڹر�ʱ�˳���
app.on('window-all-closed', function () {
    // �� macOS �ϣ������û��� Cmd + Q ȷ�����˳���
    // ������󲿷�Ӧ�ü���˵����ᱣ�ּ��
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // �� macOS �ϣ������ dock ͼ�겢�Ҹ�Ӧ��û�д򿪵Ĵ���ʱ��
    // ���󲿷�Ӧ�û����´���һ�����ڡ�
    if (mainWindow === null) {
        createWindow()
    }
})

// �����ļ����������дӦ��ʣ�������̴��롣
// Ҳ���Բ�ֳɼ����ļ���Ȼ���� require ���롣
